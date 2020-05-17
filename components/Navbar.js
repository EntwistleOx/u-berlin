import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              alt="u-berlin"
              src="images/logo.png"
              className="img-responsive"
              width="155"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div></div>
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul> */}

            <ul className="nav navbar-nav ml-auto">
              <li
                className={
                  router.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/about' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/about">
                  <a className="nav-link">Nosotros</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/services'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link href="/services">
                  <a className="nav-link">Servicios</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/solutions-import' ||
                  router.pathname === '/solutions-export' ||
                  router.pathname === '/solutions-buy'
                    ? 'nav-item dropdown active'
                    : 'nav-item dropdown '
                }
              >
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav-link"
                >
                  Soluciones <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/solutions-import">
                      <a className="nav-link">Importar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions-export">
                      <a className="nav-link">Exportar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions-buy">
                      <a className="nav-link">Compras por Internet</a>
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
                    ? 'nav-item dropdown active'
                    : 'nav-item dropdown '
                }
              >
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav-link"
                >
                  Herramientas <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/tools-tariff">
                      <a className="nav-link">Arancel Aduanero</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools-agreements">
                      <a className="nav-link">
                        Acuerdos y Tratados Internacionales
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools-containers">
                      <a className="nav-link">Contenedores</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools-incoterms">
                      <a className="nav-link">Incoterms</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={router.pathname === '/contact' ? 'active' : ''}>
                <Link href="/contact">
                  <a className="nav-link">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
