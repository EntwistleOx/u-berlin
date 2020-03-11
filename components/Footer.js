import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='widget'>
              <h5 className='widgetheading'>Contactate</h5>
              <address>
                <strong>U-Berlin Logistics</strong>
                <br />
                Av. Americo Vespucio #1309,
                <br />
                of. 206, Pudahuel, Chile.
              </address>
              <p>
                <i className='icon-phone'></i> +56 2 2944 0554 <br />
                <i className='icon-envelope-alt'></i> info@u-berlin.com
              </p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='widget'>
              <h5 className='widgetheading'>Noticias Recientes</h5>
              <ul className='link-list'>
                <li>
                  <Link href='#'>
                    <a className='waves-effect waves-dark'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a className='waves-effect waves-dark'>
                      Pellentesque et pulvinar enim. Quisque at tempor ligula
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a className='waves-effect waves-dark'>
                      Natus error sit voluptatem accusantium doloremque
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='widget'>
              <h5 className='widgetheading'>Links</h5>
              <ul className='link-list'>
                <li>
                  <a
                    className='waves-effect waves-dark'
                    href='https://www.aduana.cl/'
                  >
                    Aduana de Chile
                  </a>
                </li>
                <li>
                  <a
                    className='waves-effect waves-dark'
                    href='https://www.sag.gob.cl/'
                  >
                    Servicio Agricola y Ganadero
                  </a>
                </li>
                <li>
                  <a
                    className='waves-effect waves-dark'
                    href='http://www.dgmn.cl/'
                  >
                    Direccion General de Movilizacion Nacional
                  </a>
                </li>
                <li>
                  <a
                    className='waves-effect waves-dark'
                    href='http://www.subpesca.cl/'
                  >
                    Subpesca
                  </a>
                </li>
                <li>
                  <a
                    className='waves-effect waves-dark'
                    href='https://www.subtel.cl/'
                  >
                    Subtel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='widget text-center'>
              <img
                className='img-responsive'
                src='images/aduanachile.png'
                alt=''
              />
              <hr />
              <img
                className='img-responsive'
                src='images/iatalogo.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div id='sub-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='copyright'>
                <p>
                  <span>
                    &copy;{' '}
                    <a href='https://github.com/EntwistleOx'>
                      <b>JD</b>
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <ul className='social-network'>
                <li>
                  <a
                    className='waves-effect waves-dark'
                    href='#!'
                    data-placement='top'
                    title='Facebook'
                  >
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='waves-effect waves-dark'
                    href='https://www.linkedin.com/company/u-berlin-logistics'
                    data-placement='top'
                    title='Linkedin'
                  >
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
