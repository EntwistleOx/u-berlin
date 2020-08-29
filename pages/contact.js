import { useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Recaptcha from 'react-google-recaptcha';
import Clocks from '../components/Clocks';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const Contact = () => {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const { name, company, email, message } = formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const captchaOnChange = (e) => {
    setFormData({
      ...formData,
      'g-recaptcha-response': e,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const sendMsg = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...formData,
      }),
    });

    if (!sendMsg.ok) {
      // eslint-disable-next-line no-console
      console.log(sendMsg.error);
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 10000);

    setFormData({
      name: '',
      company: '',
      email: '',
      message: '',
    });
    recaptchaRef.current.reset();
  };

  return (
    <Layout pageTitle="U-Berlin | Contacto">
      <>
        <PagesHeader title="Contacto" />
        <Clocks />
        <section id="contact">
          <Container className="py-4">
            <Row>
              <Col lg={6} className="d-flex align-items-center">
                <div className="text-justify">
                  <h3>
                    Contactate
                    <span className="text-color"> con Nosotros</span>
                  </h3>
                  <strong>¿Como nos puedes contactar?</strong>
                  <br />
                  <p>
                    <i className="icon-phone" />
                    +56 2 2944 0554
                    <br />
                    <i className="icon-envelope-alt" />
                    info@u-berlin.com
                  </p>
                  <strong>¿Donde nos ubicamos?</strong>
                  <br />
                  <p>
                    Av. Americo Vespucio #1309,
                    <br />
                    of. 206, Pudahuel, Chile.
                  </p>
                </div>
              </Col>
              <Col lg={6} className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.851325182998!2d-70.7826047848013!3d-33.427120280780535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c226e8d37f27%3A0xb57afc037e15ac2d!2sAv.+Am%C3%A9rico+Vespucio+1309%2C+Pudahuel%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1sen!2scl!4v1552147624557"
                />
              </Col>
            </Row>

            <Row>
              <Col md={12} className="mt-4">
                {showAlert && (
                  <Alert variant="success">
                    Gracias por escribirnos, no contactaremos a brevedad.
                  </Alert>
                )}

                <Form
                  name="contact"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                  onSubmit={handleForm}
                  netlify-honeypot="bot-field"
                >
                  <div hidden aria-hidden="true">
                    <label htmlFor="bot-field">
                      <input name="bot-field" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      Nombre
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        className="form-control"
                        onChange={handleOnChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">
                      Empresa
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={company}
                        className="form-control"
                        onChange={handleOnChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        className="form-control"
                        onChange={handleOnChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Mensaje
                      <textarea
                        name="message"
                        id="message"
                        value={message}
                        rows="3"
                        onChange={handleOnChange}
                        required
                        className="form-control"
                        style={{ resize: 'none' }}
                      />
                    </label>
                  </div>

                  <Recaptcha
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY}
                    onChange={captchaOnChange}
                  />

                  <Button type="submit" variant="primary">
                    Enviar
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    </Layout>
  );
};

export default Contact;
