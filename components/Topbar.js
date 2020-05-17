import Link from 'next/link';
import Clock from 'react-live-clock';
import ReactCountryFlag from 'react-country-flag';
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
      <div className="container text-dark">
        <div className="row align-items-center justify-content-between py-2 px-2">
          <div className="row col-lg-2">
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
          </div>

          <div className="col-lg-10 top-contact">
            <div className="float-right ml-5">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faEnvelope} />{' '}
                <span className="ml-2">info@u-berlin.com</span>
              </a>
            </div>

            <div className="float-right ml-5">
              <a href="#" className="text-dark">
                <FontAwesomeIcon icon={faPhoneAlt} />{' '}
                <span className="ml-2">+56 2 2944 0554</span>
              </a>
            </div>
          </div>
        </div>

        {/* <div
          className="row align-items-center justify-content-center"
          style={{ maxHeight: '24px' }}
        >
          <div>
            <ReactCountryFlag
              countryCode="CL"
              svg
              style={{
                width: '1.2em',
                height: '1.7em',
                marginRight: '8px',
                marginLeft: '8px',
              }}
            />
            <span>
              <Clock
                format={'HH:mm:ss'}
                ticking={true}
                timezone={'America/Santiago'}
              />
            </span>
          </div>
          <div className="mx-5">
            <ReactCountryFlag
              countryCode="JP"
              svg
              style={{
                width: '1.2em',
                height: '1.7em',
                marginRight: '8px',
                marginLeft: '8px',
              }}
            />
            <span>
              <Clock
                format={'HH:mm:ss'}
                ticking={true}
                timezone={'Asia/Tokyo'}
              />
            </span>
          </div>
          <div>
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{
                width: '1.2em',
                height: '1.7em',
                marginRight: '8px',
                marginLeft: '8px',
              }}
            />
            <span>
              <Clock
                format={'HH:mm:ss'}
                ticking={true}
                timezone={'Europe/London'}
              />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
