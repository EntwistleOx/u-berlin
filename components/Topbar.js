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

{
  /* 
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div> 
*/
}

const Topbar = () => {
  return (
    <section id="topbar">
      <Container className="text-dark">
        <div className="topbar-row row">
          <div className="top-icons col-md-4 align-self-center d-flex justify-content-start">
            <div className=" mr-4">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className=" mr-4">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className=" mr-4">
              <a
                href="https://u-berlin.netlify.app/admin"
                className="text-dark"
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
          </div>

          <div className="top-clocks col-md-4 align-self-center d-flex justify-content-center">
            <div className="clocks">
              <ReactCountryFlag countryCode="CL" svg />
              <Clock
                format={'HH:mm'}
                ticking={true}
                timezone={'America/Santiago'}
              />
            </div>
            <div className="clocks">
              <ReactCountryFlag countryCode="JP" svg />
              <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Tokyo'} />
            </div>
            <div className="clocks">
              <ReactCountryFlag countryCode="GB" svg />
              <Clock
                format={'HH:mm'}
                ticking={true}
                timezone={'Europe/London'}
              />
            </div>
          </div>

          <div className="top-contact col-md-4 align-self-center d-flex justify-content-md-end justify-content-sm-center">
            <div className="ml-3">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ml-2">info@u-berlin.com</span>
              </a>
            </div>

            <div className="ml-3">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className="ml-1">+56 2 2944 0554</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Topbar;
