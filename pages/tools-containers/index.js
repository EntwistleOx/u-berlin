import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Clocks from '../../components/Clocks';
import Layout from '../../components/Layout';
import PagesHeader from '../../components/PagesHeader';
import { attributes } from '../../content/tool-tariff.md';

const ToolsContainers = () => {
  const { title } = attributes;
  return (
    <Layout pageTitle={`U-Berlin | ${title}`}>
      <PagesHeader title={title} />
      <Clocks />
      <section id='containers' className='overflow-hidden'>
        <Container className='py-4'>
          <Row>
            <Col md={12}>
              <Image fluid src='images/contenedores.jpg' alt='contenedores' />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default ToolsContainers;
