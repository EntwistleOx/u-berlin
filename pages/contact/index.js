import { useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Recaptcha from 'react-google-recaptcha';
import Clocks from '../../components/Clocks';
import Envelope from '../../components/Icons/Envelope';
import Phone from '../../components/Icons/Phone';
import Layout from '../../components/Layout';
import PagesHeader from '../../components/PagesHeader';
import { attributes as contact } from '../../content/contact.md';
import styles from './contact.module.css';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const Contact = () => {
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState({ msg: '', type: '' });
  const [showAlert, setShowAlert] = useState(false);

  const { name, company, email, message } = formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const captchaOnChange = (e) => {
  //   console.log(e);
  //   setFormData({
  //     ...formData,
  //     'g-recaptcha-response': e,
  //   });
  // };

  const handleForm = async (e) => {
    e.preventDefault();

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    const captchaResponse = await fetch('/api/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    });
    console.log('cap', captchaResponse);
    if (!captchaResponse.ok) {
      const data = await captchaResponse.json();
      setAlert({
        msg: data.errors,
        type: 'error',
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setAlert({
          msg: '',
          type: '',
        });
      }, 10000);
    } else {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact-form',
          ...formData,
        }),
      });
      if (!response.ok) {
        setAlert({
          msg: 'Ha ocurrido un error, intenta nuevamente.',
          type: 'error',
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          setAlert({
            msg: '',
            type: '',
          });
        }, 10000);
      } else {
        setAlert({
          msg: 'Gracias por escribirnos, no contactaremos a brevedad.',
          type: 'success',
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          setAlert({
            msg: '',
            type: '',
          });
        }, 10000);
        setFormData({
          name: '',
          company: '',
          email: '',
          message: '',
        });
      }
    }
  };

  return (
    <Layout pageTitle='U-Berlin | Contacto'>
      <>
        <PagesHeader title='Contacto' />
        <Clocks />
        <section id='contact'>
          <Container className='py-4'>
            <Row>
              <Col lg={6} className='d-flex align-items-center'>
                <div className='text-justify'>
                  <h3 className='text-primary'>Contactate con Nosotros</h3>
                  <strong>¿Como nos puedes contactar?</strong>
                  <br />
                  <p>
                    <a
                      href={`mailto:${contact.email}`}
                      className='mr-4 text-dark'
                    >
                      <Envelope />
                    </a>
                    <a href={`tel:${contact.phone}`} className='text-dark'>
                      <Phone />
                    </a>
                  </p>
                  <strong>¿Donde nos ubicamos?</strong>
                  <br />
                  <p>{contact.address}</p>
                </div>
              </Col>
              <Col lg={6} className='embed-responsive embed-responsive-16by9'>
                <iframe
                  title='maps'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.851325182998!2d-70.7826047848013!3d-33.427120280780535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c226e8d37f27%3A0xb57afc037e15ac2d!2sAv.+Am%C3%A9rico+Vespucio+1309%2C+Pudahuel%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1sen!2scl!4v1552147624557'
                />
              </Col>
            </Row>

            <Row>
              <Col md={12} className='mt-4'>
                {showAlert && <Alert variant={alert.type}>{alert.msg}</Alert>}

                <Recaptcha
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY}
                  size='invisible'
                />
                <Form
                  name='contact-form'
                  data-netlify='true'
                  data-netlify-recaptcha='true'
                  netlify-honeypot='bot-field'
                  onSubmit={handleForm}
                >
                  <div hidden aria-hidden='true'>
                    <label htmlFor='bot-field'>
                      <input name='bot-field' />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name' className={styles.label}>
                      Nombre
                      <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        className='form-control'
                        onChange={handleOnChange}
                        required
                      />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='company' className={styles.label}>
                      Empresa
                      <input
                        type='text'
                        name='company'
                        id='company'
                        value={company}
                        className='form-control'
                        onChange={handleOnChange}
                        required
                      />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email' className={styles.label}>
                      Email
                      <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        className='form-control'
                        onChange={handleOnChange}
                        required
                      />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='message' className={styles.label}>
                      Mensaje
                      <textarea
                        name='message'
                        id='message'
                        value={message}
                        rows='3'
                        onChange={handleOnChange}
                        required
                        className='form-control'
                        style={{ resize: 'none' }}
                      />
                    </label>
                  </div>

                  <Button type='submit' variant='primary'>
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
