import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white-50">
      <Container>
        <Row className="pt-5">
          <Col md={3} className="mb-4">
            <div>
              <h5 className="footer-title">Contactate</h5>
              <address>
                U-Berlin Logistics
                <br />
                Av. Americo Vespucio #1309,
                <br />
                of. 206, Pudahuel, Chile.
              </address>
              <div>
                <FontAwesomeIcon icon={faPhoneAlt} />{' '}
                <span className="ml-2">+56 2 2944 0554</span> <br />
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <span className="ml-2">info@u-berlin.co</span>m
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="footer-title">Links</h5>
            <ul>
              <li>
                <a href="https://www.aduana.cl/">Aduana de Chile</a>
              </li>
              <li>
                <a href="https://www.sag.gob.cl/">
                  Servicio Agricola y Ganadero
                </a>
              </li>
              <li>
                <a href="http://www.dgmn.cl/">
                  Direccion General de Movilizacion Nacional
                </a>
              </li>
              <li>
                <a href="http://www.subpesca.cl/">Subpesca</a>
              </li>
              <li>
                <a href="https://www.subtel.cl/">Subtel</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <div className="text-center">
              <Image fluid src="images/footer/iatalogo.png" alt="Iata" />
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <div className="text-center">
              <Image
                fluid
                src="images/footer/aduanachile.png"
                alt="Aduana Chile"
              />
            </div>
          </Col>
        </Row>

        <div className="subfooter">
          <div className="d-flex align-items-center justify-content-between py-4">
            <div>
              <FontAwesomeIcon icon={faTerminal} /> JDev{' '}
            </div>
            <div className="d-flex justify-content-end">
              <div>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div className="ml-3">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
