import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Clocks from '../../components/Clocks';
import Download from '../../components/Icons/Download';
import Layout from '../../components/Layout';
import PagesHeader from '../../components/PagesHeader';
import { attributes } from '../../content/tool-tariff.md';

const Tariff = () => {
  const { title, tariffs } = attributes;

  return (
    <Layout pageTitle={`U-Berlin | ${title}`}>
      <PagesHeader title={title} />
      <Clocks />
      <section id='tools-tariff'>
        <Container>
          <Row>
            <Col md={12}>
              <ul className='list-group list-group-flush'>
                {tariffs.map((tariff) => (
                  <li className='list-group-item' key={tariff.id}>
                    <p className='pt-3'>
                      <strong>{tariff.title}</strong>
                      <a href={`${tariff.link}`} className='text-dark ml-1'>
                        <Download />
                      </a>
                    </p>
                    <p>{tariff.description}</p>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Tariff;
