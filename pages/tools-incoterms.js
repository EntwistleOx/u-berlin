import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import Clocks from '../components/Clocks';
import Image from 'react-bootstrap/Image';

const ToolsIncoterms = () => {
  return (
    <Layout pageTitle='U-Berlin | Incoterms'>
      <Fragment>
        <PagesHeader title={'Incoterms'} />
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
      </Fragment>
    </Layout>
  );
};

export default ToolsIncoterms;
