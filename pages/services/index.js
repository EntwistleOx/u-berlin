import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Clocks from '../../components/Clocks';
import Layout from '../../components/Layout';
import PagesHeader from '../../components/PagesHeader';
import { attributes } from '../../content/services.md';
import styles from './services.module.css';

const Services = () => {
  const { title } = attributes;

  return (
    <Layout pageTitle={`U-Berlin | ${title}`}>
      <PagesHeader title={title} />
      <Clocks />
      <section id='services'>
        <Container className='py-4'>
          {/* Sea Cargo */}
          <Row>
            <Col lg={6} className={`${styles.seaShowcase} showcase-img`} />
            <Col lg={6} className='d-flex align-items-center'>
              <div className='text-justify p-2 '>
                <h3 className='text-primary'>Transporte Maritimo</h3>
                <p>
                  El 90% del intercambio comercial chileno se realiza por vía
                  marítima, lo que lo convierte en el principal medio de
                  transporte de mercancías, junto a esto, Chile está posicionado
                  geográficamente y estratégicamente de manera privilegiada para
                  el transporte marítimo de mercancías, principalmente con
                  países del Asia-Pacifico, a esto se aúnan los acuerdos
                  comerciales con las principales economías de esta zona: China,
                  Japón, Corea del Sur, Nueva Zelanda, Australia y nuestros
                  países vecinos.
                </p>
                <p>
                  amplia experiencia en transporte marítimo internacional de
                  cargas nos permite ofrecer un servicio de calidad, ayudando en
                  la tramitación y documentación necesarias tanto en importación
                  como exportación.
                </p>
              </div>
            </Col>
          </Row>
          {/* Air Cargo */}
          <Row>
            <Col
              lg={6}
              className={`${styles.airShowcase} order-lg-2 showcase-img`}
            />
            <Col lg={6} className='order-lg-1 d-flex align-items-center'>
              <div className='text-justify p-2 '>
                <h3 className='text-primary'>Transporte Aereo</h3>
                <p>
                  En U-Berlin entendemos perfectamente la urgencia de sus
                  envios, diseñando soluciones flexibles a su medida mediante
                  transporte aereo de carga.El transporte aereo es el medio mas
                  rapido de envio de mercancias que existe en la actualidad.
                  Ademas, este tipo de transporte es el mas seguro para su carga
                  al tener el indice mas bajo de siniestralidad. Puede utilizar
                  transporte aereo tanto si necesita realizar envios urgentes, o
                  si necesita enviar muestras pequeñas. Como agente de carga nos
                  encargamos de reservar los espacios en aviones, asi como de
                  realizar la documentacion pertinente, de igual manera la
                  consolidacion de cargas, trazar las rutas y planificar las
                  entregas, todo esto, tratando siempre de optimizar los costos
                  de nuestros clientes.
                </p>
                <p>
                  transporte aereo es la unica solucion para aquellos envios de
                  productos perecederos que, o por su corto tiempo de vida, o
                  bien porque no hay alternativa maritima refrigerada, estos
                  deben ser enviados por avion.
                </p>
              </div>
            </Col>
          </Row>
          {/* Ground Cargo */}
          <Row>
            <Col lg={6} className={`${styles.groundShowcase} showcase-img`} />
            <Col lg={6} className='d-flex align-items-center'>
              <div className='text-justify p-2 '>
                <h3 className='text-primary'>Transporte Terrestre</h3>
                <p>
                  Damos soluciones en transporte de carga por via terrestre
                  tanto a nivel nacional como internacional. Cumplimos con sus
                  requisitos de tiempo deentrega, ofrecemos un servicio
                  personalizado, recogemos su carga en bodega de origen y la
                  entregamos en la bodega de destino. Nuestros servicios de
                  carga incluyen:
                </p>
                <ol>
                  <li>Carga Suelta</li>
                  <li>Contenedores</li>
                  <li>Carga Refrigerada</li>
                </ol>
                <p>Transporte internacional terrestre a:</p>
                <ol>
                  <li>Argentina</li>
                  <li>Brazil</li>
                  <li>Uruguay</li>
                  <li>Paraguay</li>
                  <li>Peru</li>
                  <li>Bolivia</li>
                </ol>
              </div>
            </Col>
          </Row>
          {/* Projects */}
          <Row>
            <Col
              lg={6}
              className={`${styles.cargoShowcase} order-lg-2 showcase-img`}
            />
            <Col lg={6} className='order-lg-1 d-flex align-items-center'>
              <div className='text-justify p-2 '>
                <h3 className='text-primary'>Cargas de Proyectos</h3>
                <p>
                  U-Berlin le ayuda en los complejos requisitos logisticos que
                  implican el transporte de equipos pesados y de gran magnitud.
                  Le ofrecemos un servicio de transportes y gestion de proyectos
                  integrados, con el fin de garantizar que su carga llegue a su
                  destino de acuerdo a lo planificado.
                </p>
                <p>
                  Nuestro equipo de trabajo cuenta con el pensamiento creativo
                  necesarios para generar e implementar soluciones eficientes y
                  eficaces. Creamos un plan de transporte personalizado a cada
                  caso, con sus costes de transporte, garantizando que se cumpla
                  el itinerario y los medios de transporte adecuados.
                </p>
                <p>
                  Diseñamos e implementamos soluciones adaptadas a diferentes
                  industrias:
                </p>
                <ol>
                  <li>Ingeniería, aprovisionamiento y construcción</li>
                  <li>Industria química y del gas</li>
                  <li>Energía eléctrica</li>
                  <li>Proyectos de infraestructura</li>
                  <li>Mineria</li>
                  <li>Eventos</li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Services;
