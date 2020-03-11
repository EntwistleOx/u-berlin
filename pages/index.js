import { Fragment } from 'react';
import Layout from '../components/Layout';
import Slider from 'react-slick';

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000
  };

  return (
    <Layout>
      <Fragment>
        <Slider {...settings}>
          <div>
            <img
              src='images/slides/air-cargo.jpg'
              className='img-responsive'
              alt='aereo'
            />
          </div>
          <div>
            <img
              src='images/slides/sea-cargo.jpg'
              className='img-responsive'
              alt='maritimo'
            />
          </div>
          <div>
            <img
              src='images/slides/truck-cargo.jpg'
              className='img-responsive'
              alt='terrestre'
            />
          </div>
        </Slider>

        <section className='dishes'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='aligncenter'>
                  <h2 className='aligncenter'>Soluciones</h2>
                  Nos especializamos en transportes marítimo, aéreos y
                  terrestre, carga de proyectos específicos y su logística. Esto
                  lo hacemos a través de un equipo humano y profesional
                  altamente capacitado en cada una de las áreas de gestión y
                  operaciones que permiten entregar un servicio óptimo.
                </div>
                <br />
              </div>
            </div>

            <div className='row service-v1 margin-bottom-40'>
              <div className='col-md-3 md-margin-bottom-40'>
                <div className='card small'>
                  <div className='card-image'>
                    <img
                      className='img-responsive'
                      src='images/service1.jpg'
                      alt=''
                    />
                    <span className='card-title'>Transporte Maritimo</span>
                  </div>
                  <div className='card-content'>
                    <p className='text-center'>
                      Amplia experiencia en transporte marítimo internacional de
                      cargas.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 md-margin-bottom-40'>
                <div className='card small'>
                  <div className='card-image'>
                    <img
                      className='img-responsive'
                      src='images/service2.jpg'
                      alt=''
                    />
                    <span className='card-title'>
                      &nbsp;&nbsp;Transporte Aereo&nbsp;&nbsp;
                    </span>
                  </div>
                  <div className='card-content'>
                    <p className='text-center'>
                      Diseñamos soluciones flexibles mediante transporte aereo
                      de carga.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 md-margin-bottom-40'>
                <div className='card small'>
                  <div className='card-image'>
                    <img
                      className='img-responsive'
                      src='images/service3.jpg'
                      alt=''
                    />
                    <span className='card-title'>Transporte Terretre</span>
                  </div>
                  <div className='card-content'>
                    <p className='text-center'>
                      Transporte de carga via terrestre a nivel nacional como
                      internacional.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 md-margin-bottom-40'>
                <div className='card small'>
                  <div className='card-image'>
                    <img
                      className='img-responsive'
                      src='images/service4.jpg'
                      alt=''
                    />
                    <span className='card-title'>Cargas de Proyecto</span>
                  </div>
                  <div className='card-content'>
                    <p className='text-center'>
                      Diseñamos e implementamos soluciones para diferentes
                      industrias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Home;
