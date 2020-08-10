import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import Clocks from '../components/Clocks';

const ToolsIncoterms = () => (
  <Layout pageTitle="U-Berlin | Incoterms">
    <>
      <PagesHeader title="Incoterms" />
      <section id="incoterms" className="overflow-hidden">
        <Clocks />
        <Container className="py-4">
          <Row>
            <Col md={12}>
              <Image fluid src="images/incoterms.png" alt="Incoterms" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  </Layout>
);

export default ToolsIncoterms;
