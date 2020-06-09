import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';

const Success = () => {
  return (
    <Layout>
      <Fragment>
        <PagesHeader title={'Gracias!'} />

        <section id="success" className="overflow-hidden">
          <Container className="py-4">
            <Row>
              <Col md={12}>
                <div class="alert alert-success py-3 my-3" role="alert">
                  <h4 class="alert-heading text-center">
                    {' '}
                    Tu mensaje fue enviado correctamente, nos contactaremos a la
                    brevedad!
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Success;
