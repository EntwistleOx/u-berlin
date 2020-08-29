import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Footer = () => (
  <footer className='text-white-50'>
    <Container>
      <Row className='pt-5'>
        <Col md={3} className='mb-4'>
          <div>
            <h3 className='footer-title'>Contactate</h3>
            <address>
              U-Berlin Logistics
              <br />
              Av. Americo Vespucio #1309,
              <br />
              of. 206, Pudahuel, Chile.
            </address>
            <div>
              <a href='tel:+56229440554'>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className='ml-2'>+56 2 2944 0554</span> <br />
              </a>
              <a href='mailto:info@u-berlin.com'>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className='ml-2'>info@u-berlin.com</span>
              </a>
            </div>
          </div>
        </Col>
        <Col md={3} className='mb-4'>
          <h3 className='footer-title'>Links</h3>
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

      <div className='subfooter'>
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
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className='ml-3'>
              <a target='_blank' rel='noopener noreferrer' href='!#'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
