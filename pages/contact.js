import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';

const Contact = () => {
  return (
    <Layout>
      <Fragment>
        <PagesHeader title={'Contacto'} />
        <section id="contact">
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-justify">
                  <h3>
                    Contactate<span className="text-color"> con Nosotros</span>
                  </h3>
                  <strong>¿Como nos puedes contactar?</strong>
                  <br />
                  <p>
                    <i className="icon-phone"></i> +56 2 2944 0554 <br />
                    <i className="icon-envelope-alt"></i> info@u-berlin.com
                  </p>
                  <strong>¿Donde nos ubicamos?</strong>
                  <br />
                  <p>
                    Av. Americo Vespucio #1309,
                    <br />
                    of. 206, Pudahuel, Chile.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 embed-responsive embed-responsive-16by9">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.851325182998!2d-70.7826047848013!3d-33.427120280780535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c226e8d37f27%3A0xb57afc037e15ac2d!2sAv.+Am%C3%A9rico+Vespucio+1309%2C+Pudahuel%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1sen!2scl!4v1552147624557"
                ></iframe>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mt-4">
                <form name="contactForm" id="contactForm">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="10"
                      cols="100"
                      required
                      className="form-control"
                      style={{ resize: 'none' }}
                    ></textarea>
                  </div>
                  <div id="success"></div>
                  <Button type="submit" variant="primary">
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Contact;
