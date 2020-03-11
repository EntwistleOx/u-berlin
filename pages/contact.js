import { Fragment } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <Fragment>
        <section id='inner-headline'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='pageTitle'>Contacto</h2>
              </div>
            </div>
          </div>
        </section>

        <section id='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='about-logo'>
                  <h3>
                    Contactate<span className='color'> con Nosotros</span>
                  </h3>
                  <strong>¿Como nos puedes contactar?</strong>
                  <br />
                  <p>
                    <i className='icon-phone'></i> +56 2 2944 0554 <br />
                    <i className='icon-envelope-alt'></i> info@u-berlin.com
                  </p>
                  <strong>¿Donde nos ubicamos?</strong>
                  <br />
                  <p>
                    Av. Americo Vespucio #1309,
                    <br />
                    of. 206, Pudahuel, Chile.
                  </p>
                </div>
                <hr />
                <iframe
                  title='maps'
                  className='col-lg-12 col-md-12 col-sm-12'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.851325182998!2d-70.7826047848013!3d-33.427120280780535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c226e8d37f27%3A0xb57afc037e15ac2d!2sAv.+Am%C3%A9rico+Vespucio+1309%2C+Pudahuel%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1sen!2scl!4v1552147624557'
                ></iframe>
                <hr />
              </div>
              <div className='col-md-6'>
                <form name='sentMessage' id='contactForm'>
                  <div className='input-field'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      required
                      // placeholder='Please enter your name'
                    />
                    <label className=''> Name </label>
                    <p className='help-block'></p>
                  </div>
                  <div className='input-field'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      required
                      // placeholder='Please enter your email'
                    />
                    <label className=''> Email </label>
                  </div>

                  <div className='input-field'>
                    <textarea
                      rows='10'
                      cols='100'
                      required
                      className='form-control materialize-textarea'
                      // placeholder='Please enter your message'
                      style={{ resize: 'none' }}
                    ></textarea>
                    <label className=''> Message </label>
                  </div>
                  <div id='success'></div>
                  <button
                    type='submit'
                    className='btn btn-primary waves-effect waves-dark pull-right'
                  >
                    Send
                  </button>
                  <br />
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
