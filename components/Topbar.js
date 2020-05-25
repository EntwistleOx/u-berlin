import Clock from 'react-live-clock';
import ReactCountryFlag from 'react-country-flag';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Topbar = () => {
  return (
    <div id="topbar" className="bg-primary">
      <Container className="text-dark">
        <Row className="align-items-center justify-content-between py-2 px-2">
          <Row>
            <div className="mr-4 ml-2">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="mr-4">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className="mr-4">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
          </Row>

          <div className="top-contact">
            <div className="float-right ml-3">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <span className="ml-2">info@u-berlin.com</span>
              </a>
            </div>

            <div className="float-right ml-3">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faPhoneAlt} />{' '}
                <span className="ml-2">+56 2 2944 0554</span>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
