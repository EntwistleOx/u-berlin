import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Envelope from '../Icons/Envelope';
import Facebook from '../Icons/Facebook';
import Linkedin from '../Icons/Linkedin';
import Phone from '../Icons/Phone';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={`${styles.footer} text-white-50`}>
    <Container>
      <Row className='pt-5'>
        <Col md={3} className='mb-4'>
          <div>
            <h3 className={styles.title}>Contactate</h3>
            <address>
              U-Berlin Logistics
              <br />
              Av. Americo Vespucio #1309,
              <br />
              of. 206, Pudahuel, Chile.
            </address>
            <div>
              <a href='mailto:info@u-berlin.com' className='mr-4'>
                <Envelope />
              </a>
              <a href='tel:+56229440554'>
                <Phone />
              </a>
            </div>
          </div>
        </Col>
        <Col md={3} className='mb-4'>
          <h3 className={styles.title}>Links</h3>
          <ul>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.aduana.cl/'
              >
                Aduana de Chile
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.sag.gob.cl/'
              >
                Servicio Agricola y Ganadero
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://www.dgmn.cl/'
              >
                Direccion General de Movilizacion Nacional
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://www.subpesca.cl/'
              >
                Subpesca
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.subtel.cl/'
              >
                Subtel
              </a>
            </li>
          </ul>
        </Col>
        <Col md={3} className='mb-4'>
          <div className='text-center'>
            <Image fluid src='images/footer/iatalogo.png' alt='Iata' />
          </div>
        </Col>
        <Col md={3} className='mb-4'>
          <div className='text-center'>
            <Image
              fluid
              src='images/footer/aduanachile.png'
              alt='Aduana Chile'
            />
          </div>
        </Col>
      </Row>

      <div className={styles.subFooter}>
        <div className='d-flex align-items-center justify-content-between py-4'>
          <div>
            <img
              src='images/jd-dark.png'
              alt='Juan Díaz Web Developer'
              width='50px'
            />
          </div>
          <div className='d-flex justify-content-end'>
            <div>
              <a target='_blank' rel='noopener noreferrer' href='!#'>
                <Facebook />
              </a>
            </div>
            <div className='ml-3'>
              <a target='_blank' rel='noopener noreferrer' href='!#'>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
