import { Fragment } from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Fragment>
        <section id='inner-headline'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='pageTitle'>Nosotros</h2>
              </div>
            </div>
          </div>
        </section>
        <section id='content'>
          <section className='section-padding'>
            <div className='container'>
              <div className='row showcase-section'>
                <div className='col-md-6'>
                  <img
                    className='img-responsive'
                    src='images/about.jpg'
                    alt=''
                  />
                </div>
                <div className='col-md-6'>
                  <div className='about-text text-justify'>
                    <h3>
                      Nuestra <span className='color'>Compañia</span>
                    </h3>
                    <p>
                      U-Berlin nace de la visión de empresarios del sector que
                      vieron una oportunidad y la necesidad de dar un servicio
                      de calidad y personalizado a sus clientes.
                    </p>
                    <p>
                      Nuestra Visión es ser la compañía elegida por nuestra
                      dedicación, calidad de servicio y por entregar soluciones
                      creativas e innovadoras. Queremos ser reconocidos por
                      nuestra calidad humana y profesional que nos permite
                      entregar un servicio personalizado y de calidad.
                    </p>
                    <p>
                      Como Misión, ayudamos a nuestros clientes a alcanzar sus
                      metas de negocios a través de nuestras soluciones y
                      servicios logísticos. Queremos lograr, junto con nuestros
                      colaboradores, un crecimiento sostenible y desarrollo
                      profesional a largo plazo.
                    </p>
                    <p>
                      Nos especializamos en transportes marítimo, aéreos y
                      terrestre, carga de proyectos específicos y su logística.
                      Esto lo hacemos a través de un equipo humano y profesional
                      altamente capacitado en cada una de las áreas de gestión y
                      operaciones que permiten entregar un servicio óptimo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Fragment>
    </Layout>
  );
};

export default About;
