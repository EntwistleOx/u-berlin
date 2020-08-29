import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Clocks from '../components/Clocks';
import Layout from '../components/Layout';
import { attributes } from '../content/index.md';

const Home = () => {
  const {
    title,
    subtitle,
    servicesTitle,
    servicesSubtitle,
    services,
    tariffsTitle,
    tariffs,
  } = attributes;

  return (
    <Layout pageTitle="U-Berlin Logistics">
      <header>
        <div className="hero">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Link href="/contact" passHref>
            <a className="btn btn-light mt-4">Contactanos!</a>
          </Link>
        </div>
      </header>

      <Clocks />

      <section id="index-services">
        <Container>
          <Row>
            <Col lg={12} className="text-center my-5">
              <h2>{servicesTitle}</h2>
              <p>{servicesSubtitle}</p>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col
                xl={3}
                lg={6}
                md={6}
                key={service.id}
                className="text-center"
              >
                <Card className="mb-5 mx-auto bg-light">
                  <img src={service.img} className="card-img-top" alt="" />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Link href={service.link} passHref>
                      <Card.Link>Leer mas...</Card.Link>
                    </Link>
                    <Link href="/contact" passHref>
                      <Card.Link>Contactanos</Card.Link>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="tarrifs" className="bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center my-5">
              <h2>{tariffsTitle}</h2>
            </Col>
          </Row>
          <Row>
            {tariffs.map((tariff) => (
              <Col lg={3} md={6} key={tariff.id} className="text-center">
                <Card className="mb-5 mx-auto bg-white">
                  <Card.Body>
                    <Card.Title style={{ fontSize: '2rem' }} className="mt-4">
                      {tariff.title}
                    </Card.Title>
                    <Card.Text className="card-text my-4">
                      {tariff.price}
                      <small className="text-muted">{tariff.unit}</small>
                    </Card.Text>
                    <Card.Text className="text-center">
                      {tariff.description}
                    </Card.Text>
                    <Link href="/contact">
                      <a className="btn btn-primary mt-3">Contactanos!</a>
                    </Link>
                  </Card.Body>
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
