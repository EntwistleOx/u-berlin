import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Clocks from '../components/Clocks';
import Layout from '../components/Layout';
import { attributes } from '../content/index.md';
import styles from './index.module.css';

const Home = () => {
  const {
    title,
    slogan,
    servicesTitle,
    servicesSubtitle,
    services,
    tariffsTitle,
    tariffs,
  } = attributes;

  return (
    <Layout pageTitle={`U-Berlin | ${title}`}>
      <header className={styles.header}>
        <div className={styles.hero}>
          <h1>U-Berlin</h1>
          <p>{slogan}</p>
          <Link href='/contact' passHref>
            <a className='btn btn-primary mt-4'>Contactanos!</a>
          </Link>
        </div>
      </header>

      <Clocks />

      <section className={styles.services}>
        <Container>
          <Row>
            <Col lg={12} className='text-center my-5'>
              <h2>{servicesTitle}</h2>
              <p>{servicesSubtitle}</p>
            </Col>
          </Row>
          <Row>
            {services.map((service, i) => (
              <Col sm={6} md={3} key={i} className='text-center'>
                <Card className='mb-5 mx-auto bg-light'>
                  <img src={service.img} className='card-img-top' alt='' />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link href='/services' passHref>
                      <Card.Link>Leer mas...</Card.Link>
                    </Link>
                    <Link href='/contact' passHref>
                      <Card.Link>Contactanos</Card.Link>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id='tarrifs' className={`${styles.tariffs} bg-light`}>
        <Container>
          <Row>
            <Col lg={12} className='text-center my-5'>
              <h2>{tariffsTitle}</h2>
            </Col>
          </Row>
          <Row>
            {tariffs.map((tariff, i) => (
              <Col sm={6} md={4} key={i} className='text-center'>
                <Card className='mb-5 mx-auto bg-white'>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.8rem' }} className='mt-2'>
                      {tariff.title}
                    </Card.Title>
                    {tariff.price.trim() !== '' && (
                      <Card.Text className='card-text my-4'>
                        {tariff.price}
                        <small className='text-muted'>{tariff.unit}</small>
                      </Card.Text>
                    )}
                    <div className='text-center card-text'>
                      <ReactMarkdown source={tariff.description} />
                    </div>
                  </Card.Body>
                  {
                    // <Card.Footer>
                    // <Link href='/contact' passHref>
                    // <Card.Link>Contactanos</Card.Link>
                    // </Link>
                    // </Card.Footer>
                  }
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
