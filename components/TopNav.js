import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNav = () => {
  const router = useRouter();

  return (
    <section id="topnav">
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
            <Image
              alt="u-berlin"
              src="images/logo.png"
              className="d-inline-block align-top"
              width="155"
            />
          </Navbar.Brand>
          <NavbarToggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Link href="/" passHref>
                <Nav.Link className={router.pathname === '/' ? 'active' : ''}>
                  Home
                </Nav.Link>
              </Link>

              <Link href="about" passHref>
                <Nav.Link
                  className={router.pathname === '/about' ? 'active' : ''}
                >
                  Nosotros
                </Nav.Link>
              </Link>

              <Link href="services" passHref>
                <Nav.Link
                  className={router.pathname === '/services' ? 'active' : ''}
                >
                  Servicios
                </Nav.Link>
              </Link>

              <NavDropdown
                title="Soluciones"
                id="solutions-dropdown"
                className={
                  router.pathname === '/solutions-import' ||
                  router.pathname === '/solutions-export' ||
                  router.pathname === '/solutions-buy'
                    ? 'active'
                    : ''
                }
              >
                <Link href="solutions-import" passHref>
                  <NavDropdown.Item>¿Como Importar?</NavDropdown.Item>
                </Link>
                <Link href="solutions-export" passHref>
                  <NavDropdown.Item>¿Como Exportar?</NavDropdown.Item>
                </Link>
                <Link href="solutions-buy" passHref>
                  <NavDropdown.Item>Compras por Internet</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown
                title="Herramientas"
                id="tools-dropdown"
                className={
                  router.pathname === '/tools-tariff' ||
                  router.pathname === '/tools-agreements' ||
                  router.pathname === '/tools-containers' ||
                  router.pathname === '/tools-incoterms'
                    ? 'active'
                    : ''
                }
              >
                <Link href="tools-tariff" passHref>
                  <NavDropdown.Item>Arancel Aduanero</NavDropdown.Item>
                </Link>
                <Link href="tools-agreements" passHref>
                  <NavDropdown.Item>Acuerdos Internacionales</NavDropdown.Item>
                </Link>
                <Link href="tools-containers" passHref>
                  <NavDropdown.Item>Contenedores</NavDropdown.Item>
                </Link>
                <Link href="tools-incoterms" passHref>
                  <NavDropdown.Item>Incoterms</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <Link href="/contact" passHref>
                <Nav.Link
                  className={router.pathname === '/contact' ? 'active' : ''}
                >
                  Contacto
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default TopNav;
