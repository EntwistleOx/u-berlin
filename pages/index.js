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
      <header className="masthead text-white text-center">
        <canvas className="overlay"></canvas>
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </Col>
          </Row>
        </Container>
      </header>

      <section id="tarrifs" className="bg-light">
        <Container>
          <Row>
            {tariffs.map((tariff, index) => {
              return (
                <Col md={4} key={index} className="text-center">
                  <Card
                    className="mb-5 mx-auto"
                    style={{ maxWidth: '18rem', height: '19.5rem' }}
                  >
                    <Card.Body>
                      <Card.Title className="mt-4">{tariff.title}</Card.Title>
                      <h2 className="card-text my-4">
                        {' '}
                        {tariff.price}{' '}
                        <small className="text-muted">{tariff.unit}</small>
                      </h2>
                      <Card.Text
                        className="text-center"
                        style={{
                          maxWidth: '8rem',
                          margin: 'auto',
                        }}
                      >
                        {tariff.description}
                      </Card.Text>
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
