import { useState, Fragment } from 'react';
import Layout from '../components/Layout';
import uuid from 'uuid/v4';
import axios from 'axios';
import Slider from 'react-slick';

const Home = ({ json }) => {
  const [results, setResults] = useState(json.data);

  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000
  };

  return (
    <Layout>
      <div>
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
                  <h2 className='aligncenter'>Tarifas</h2>
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
              {results.map(tariff => {
                return (
                  <div
                    key={tariff._id}
                    className='col-md-3 md-margin-bottom-40 text-center'
                  >
                    <div className='card'>
                      <div className='card-header'>
                        <h4 className='my-0 font-weight-normal'>
                          {tariff.title}
                        </h4>
                      </div>
                      <div className='card-body'>
                        <h1 className='card-title pricing-card-title'>
                          {tariff.price}{' '}
                          {/* <small className='text-muted'>{tariff.unit}</small> */}
                        </h1>
                        <div className='mt-3 mb-4'>
                          <p>{tariff.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <style jsx>{`
          .card {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
          }

          .card-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
          }

          .card-header h4 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .card-body {
            flex: 1 1 auto;
            padding: 1.25rem;
          }

          .card-body .card-title {
            text-transform: none !important;
            font-size: 3.5rem;
            margin-top: 0;
            margin-bottom: 1.5rem;
          }

          ul,
          ol {
            margin-top: 0;
            margin-bottom: 1.6rem;
          }
        `}</style>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await axios('http://localhost:3000/api/tariffs');
  const json = await res.data;
  return { json };
};

export default Home;
