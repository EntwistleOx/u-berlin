import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  return (
    <header>
      <div className='navbar navbar-default navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='.navbar-collapse'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link href='/'>
              <a className='navbar-brand'>
                <img
                  alt='u-berlin'
                  src='images/logo.png'
                  className='img-responsive logo-uberlin'
                />
              </a>
            </Link>
          </div>
          <div className='navbar-collapse collapse '>
            <ul className='nav navbar-nav'>
              <li className={router.pathname === '/' ? 'active' : ''}>
                <Link href='/'>
                  <a className='waves-effect waves-dark'>Home</a>
                </Link>
              </li>
              <li className={router.pathname === '/about' ? 'active' : ''}>
                <Link href='/about'>
                  <a className='waves-effect waves-dark'>Nosotros</a>
                </Link>
              </li>
              <li className={router.pathname === '/services' ? 'active' : ''}>
                <Link href='/services'>
                  <a className='waves-effect waves-dark'>Servicios</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/solutions-import' ||
                  router.pathname === '/solutions-export' ||
                  router.pathname === '/solutions-buy'
                    ? 'dropdown active'
                    : 'dropdown '
                }
              >
                <a
                  href='#'
                  data-toggle='dropdown'
                  className='dropdown-toggle waves-effect waves-dark'
                >
                  Soluciones <b className='caret'></b>
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link href='/solutions-import'>
                      <a className='waves-effect waves-dark'>Importar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/solutions-export'>
                      <a className='waves-effect waves-dark'>Exportar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/solutions-buy'>
                      <a className='waves-effect waves-dark'>
                        Compras por Internet
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  router.pathname === '/tools-tariff' ||
                  router.pathname === '/tools-agreements' ||
                  router.pathname === '/tools-containers' ||
                  router.pathname === '/tools-incoterms'
                    ? 'dropdown active'
                    : 'dropdown '
                }
              >
                <a
                  href='#'
                  data-toggle='dropdown'
                  className='dropdown-toggle waves-effect waves-dark'
                >
                  Herramientas <b className='caret'></b>
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link href='/tools-tariff'>
                      <a className='waves-effect waves-dark'>
                        Arancel Aduanero
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/tools-agreements'>
                      <a className='waves-effect waves-dark'>
                        Acuerdos y Tratados Internacionales
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/tools-containers'>
                      <a className='waves-effect waves-dark'>Contenedores</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/tools-incoterms'>
                      <a className='waves-effect waves-dark'>Incoterms</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={router.pathname === '/contact' ? 'active' : ''}>
                <Link href='/contact'>
                  <a className='waves-effect waves-dark'>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
