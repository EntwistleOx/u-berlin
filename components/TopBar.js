import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const TopBar = () => (
  <section id='topbar'>
    <Container className='text-dark py-1'>
      <Row className='topbar-row'>
        <Col
          lg={6}
          className='top-icons align-self-center d-flex justify-content-center justify-content-md-start'
        >
          <div className='mr-4'>
            <a
              href='!#'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className='mr-4'>
            <a
              href='!#'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className='mr-0'>
            <a
              href='https://u-berlin.netlify.app/admin'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark'
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
        </Col>

        <Col
          lg={6}
          className='top-contact align-self-center d-flex justify-content-center justify-content-md-end'
        >
          <div className='ml-3'>
            <a href='mailto:info@u-berlin.com' className='text-dark'>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className='ml-2'>info@u-berlin.com</span>
            </a>
          </div>
          <div className='ml-3'>
            <a href='tel:+56229440554' className='text-dark'>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className='ml-1'>+56 2 2944 0554</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default TopBar;
