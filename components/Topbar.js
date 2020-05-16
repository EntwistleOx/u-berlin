import Link from 'next/link';
import Clock from 'react-live-clock';
import ReactCountryFlag from 'react-country-flag';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ul className="social-network">
              <li>
                <a href="#" className="waves-effect waves-dark">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/u-berlin-logistics"
                  className="waves-effect waves-dark"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <Link href="/login">
                  <a className="waves-effect waves-dark">
                    <i className="fa fa-user"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="social-network">
              <li className="clocks">
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
              </li>
              <li className="clocks">
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
              </li>
              <li className="clocks">
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
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="info">
              <li>
                <i class="fa fa-phone"></i>
                <span>+56 2 2944 0554</span>
              </li>
              <li>
                <i class="fa fa-envelope"></i>
                <span>info@u-berlin.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
