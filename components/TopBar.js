import Clock from 'react-live-clock';
import ReactCountryFlag from 'react-country-flag';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
  return (
    <section id='topbar'>
      <Container className='text-dark py-1'>
        <Row className='topbar-row'>
          <Col
            lg={6}
            className='top-icons align-self-center d-flex justify-content-center justify-content-md-start'
          >
            <div className='mr-4'>
              <a href='#' className='text-dark'>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className='mr-4'>
              <a href='#' className='text-dark'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className='mr-0'>
              <a
                href='https://u-berlin.netlify.app/admin'
                className='text-dark'
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
          </Col>

          {/* <Col
            lg={4}
            className='top-clocks align-self-center d-flex justify-content-around'
          >
            <div className='clocks'>
              <ReactCountryFlag countryCode='CL' svg />
              <Clock
                format={'HH:mm'}
                ticking={true}
                timezone={'America/Santiago'}
              />
            </div>
            <div className='clocks'>
              <ReactCountryFlag countryCode='JP' svg />
              <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Tokyo'} />
            </div>
            <div className='clocks'>
              <ReactCountryFlag countryCode='GB' svg />
              <Clock
                format={'HH:mm'}
                ticking={true}
                timezone={'Europe/London'}
              />
            </div>
            <div className='clocks'>
              <ReactCountryFlag countryCode='US' svg />
              <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
            </div>
          </Col> */}

          <Col
            lg={6}
            className='top-contact align-self-center d-flex justify-content-center justify-content-md-end'
          >
            <div className='ml-3'>
              <a href='#' className='text-dark'>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className='ml-2'>info@u-berlin.com</span>
              </a>
            </div>
            <div className='ml-3'>
              <a href='#' className='text-dark'>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className='ml-1'>+56 2 2944 0554</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TopBar;
