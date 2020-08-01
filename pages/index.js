import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Layout from '../components/Layout';

import { attributes } from '../content/index.md';

const Home = () => {
  let { title, subtitle, tariffs } = attributes;

  return (
    <Layout>
      <header className='masthead text-white text-center'>
        <canvas className='overlay'></canvas>
        <Container>
          <Row className='align-items-center'>
            <Col lg={12} className='text-center'>
              <h1>{title}</h1>
              <button type='button' class='btn btn-light btn-lg mt-3'>
                Contactanos!
              </button>
            </Col>
          </Row>
        </Container>
      </header>

      <section id='index-services'>
        <Container>
          <Row>
            <Col lg={12} className='text-center my-5'>
              <h2>Nuestros Servicios</h2>
              <p>
                U-Berlin nace de la visión de empresarios del sector que vieron
                una oportunidad y la necesidad de dar un servicio de calidad y
                personalizado a sus clientes. Conoce nuestros servicios!
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} className='text-center'>
              <div className='card mb-5 mx-auto' style={{ width: '15rem' }}>
                <img
                  src='images/services/service1.jpg'
                  className='card-img-top'
                  alt=''
                />
                <div className='card-body'>
                  <h5 class='card-title'>Transporte Maritimo</h5>
                  <p className='card-text'>
                    Tenemos amplia experiencia en transporte marítimo
                    internacional de cargas.
                  </p>
                  <a href='/contact' class='btn btn-primary'>
                    Contactanos
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} className='text-center'>
              <div className='card mb-5 mx-auto' style={{ width: '15rem' }}>
                <img
                  src='images/services/service2.jpg'
                  className='card-img-top'
                  alt=''
                />
                <div className='card-body'>
                  <h5 class='card-title'>Transporte Aereo</h5>
                  <p className='card-text'>
                    Nos encargamos de reservar los espacios en aviones y de
                    realizar la documentacion pertinente.
                  </p>
                  <a href='/contact' class='btn btn-primary'>
                    Contactanos
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} className='text-center'>
              <div className='card mb-5 mx-auto' style={{ width: '15rem' }}>
                <img
                  src='images/services/service3.jpg'
                  className='card-img-top'
                  alt=''
                />
                <div className='card-body'>
                  <h5 class='card-title'>Transporte Terrestre</h5>
                  <p className='card-text mx-2'>
                    Soluciones en transporte de carga por via terrestre a nivel
                    nacional e internacional.
                  </p>
                  <a href='/contact' class='btn btn-primary'>
                    Contactanos
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} className='text-center'>
              <div className='card mb-5 mx-auto' style={{ width: '15rem' }}>
                <img
                  src='images/services/service4.jpg'
                  className='card-img-top'
                  alt=''
                />
                <div className='card-body'>
                  <h5 class='card-title'>Cargas de Proyectos</h5>
                  <p className='card-text'>
                    Diseñamos e implementamos soluciones adaptadas a diferentes
                    industrias.
                  </p>
                  <a href='/contact' class='btn btn-primary'>
                    Contactanos
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id='tarrifs' className='bg-light'>
        <Container>
          <Row>
            <Col lg={12} className='text-center my-5'>
              <h2>Revisa nuestras Tarifas</h2>
              {/* <p>
                U-Berlin nace de la visión de empresarios del sector que vieron
                una oportunidad y la necesidad de dar un servicio de calidad y
                personalizado a sus clientes.
              </p> */}
            </Col>
          </Row>
          <Row>
            {tariffs.map((tariff, index) => {
              return (
                <Col lg={3} key={index} className='text-center'>
                  <Card className='mb-5 mx-auto' style={{ maxWidth: '15rem' }}>
                    <Card.Body>
                      <Card.Title className='mt-4'>{tariff.title}</Card.Title>
                      <h4 className='card-text my-4'>
                        {' '}
                        {tariff.price}{' '}
                        <small className='text-muted'>{tariff.unit}</small>
                      </h4>
                      <Card.Text
                        className='text-center'
                        style={{
                          maxWidth: '8rem',
                          margin: 'auto',
                        }}
                      >
                        {tariff.description}
                      </Card.Text>
                      <a href='/contact' class='btn btn-primary mt-3'>
                        Contactanos
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
