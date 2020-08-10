import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import Clocks from '../components/Clocks';

const ToolsContainers = () => (
  <Layout pageTitle="U-Berlin | Contenedores">
    <>
      <PagesHeader title="Contenedores" />
      <section id="containers" className="overflow-hidden">
        <Clocks />
        <Container className="py-4">
          <Row>
            <Col md={12}>
              <Image fluid src="images/contenedores.jpg" alt="contenedores" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  </Layout>
);

export default ToolsContainers;
