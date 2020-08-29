import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Clocks from '../components/Clocks';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';

const ToolsIncoterms = () => (
  <Layout pageTitle='U-Berlin | Incoterms'>
    <>
      <PagesHeader title='Incoterms' />
      <section id='incoterms' className='overflow-hidden'>
        <Clocks />
        <Container className='py-4'>
          <Row>
            <Col md={12}>
              <Image fluid src='images/incoterms.png' alt='Incoterms' />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  </Layout>
);

export default ToolsIncoterms;
