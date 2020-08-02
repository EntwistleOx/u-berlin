import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import Clocks from '../components/Clocks';

const Tariff = () => {
  return (
    <Layout pageTitle='U-Berlin | Arancel Aduanero'>
      <Fragment>
        <PagesHeader title={'Arancel Aduanero'} />
        <section id='tools-tariff'>
          <Clocks />
          <Container>
            <Row>
              <Col md={12}>
                <ul class='list-group list-group-flush'>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION 0</strong>{' '}
                      <a href='docs/Seccion0.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Tratamientos arancelarios especiales.</p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION I Capítulos 1 AL 5</strong>{' '}
                      <a href='docs/Seccion1.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Animales vivos y productos del reino animal.</p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION II Capítulos 6 al 14</strong>{' '}
                      <a href='docs/Seccion2.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Productos del reino vegetal.</p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION III Capítulo 15</strong>{' '}
                      <a href='docs/Seccion3.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Grasas y aceites animales o vegetales; productos de su
                      desdoblamiento; grasas alimenticias elaboradas; ceras de
                      origen animal o vegetal.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION IV Capítulos 16 al 24</strong>{' '}
                      <a href='docs/Seccion4.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Productos de las industrias alimentarias; bebidas,
                      líquidos alcohólicos y vinagre; tabaco y sucedáneos del
                      tabaco.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION V Capítulos 25 al 27</strong>{' '}
                      <a href='docs/Seccion5.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Productos Minerales.</p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION VI Capítulos 28 al 38</strong>{' '}
                      <a href='docs/Seccion6.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Productos de las industrias químicas o de las industrias
                      conexas.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION VII Capítulos 39 al 40</strong>{' '}
                      <a href='docs/Seccion7.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Plástico y sus manufacturas; caucho y sus manufacturas.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION VIII Capítulos 41 al 43</strong>{' '}
                      <a href='docs/Seccion8.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Pieles, cueros, peletería y manufacturas de estas
                      materias; artículos de talabartería o guarnicionería;
                      artículos de viaje, bolsos de mano (carteras) y
                      continentes similares; manufacturas de tripa.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION IX Capítulos 44 al 46</strong>{' '}
                      <a href='docs/Seccion9.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Madera, carbón vegetal y manufacturas de madera; corcho y
                      sus manufacturas; manufacturas de espartería o cestería.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION X Capítulos 47 al 49</strong>{' '}
                      <a href='docs/Seccion10.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Pasta de madera o de las demás materias fibrosas
                      celulósicas; papel o cartón para reciclar (desperdicios y
                      desechos); papel o cartón y sus aplicaciones.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION XI Capítulos 50 al 63</strong>{' '}
                      <a href='docs/Seccion11.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Materias textiles y sus manufacturas.</p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION XII Capítulos 64 al 67</strong>{' '}
                      <a href='docs/Seccion12.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Calzado, sombreros y demás tocados, paraguas, quitasoles,
                      bastones, látigos, fustas, y sus partes; plumas preparadas
                      y artículos de plumas; flores artificiales; manufacturas
                      de cabello.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION XIII Capítulos 68 al 70</strong>{' '}
                      <a href='docs/Seccion13.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Manufacturas de piedra, yeso fraguable, cemento, amianto
                      (asbesto), mica o materias análogas; productos cerámicos;
                      vidrio y sus manufacturas.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION XIV Capítulo 71</strong>{' '}
                      <a href='docs/Seccion14.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Perlas finas (naturales)* o cultivadas, piedras preciosas
                      o semipreciosas, metales preciosos, chapados de metal
                      precioso (plaqué) y manufacturas de estas materias;
                      bisutería; monedas.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION XV Capítulos 72 al 83</strong>{' '}
                      <a href='docs/Seccion15.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Metales comunes y manufacturas de estos metales.</p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION XVI Capítulos 84 al 85</strong>{' '}
                      <a href='docs/Seccion16.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Máquinas y aparatos, material eléctrico y sus partes;
                      aparatos de grabación o reproducción de sonido, aparatos
                      de grabación o reproducción de imagen y sonido en
                      televisión, y las partes y accesorios de estos aparatos.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION XVII Capítulos 86 al 89</strong>{' '}
                      <a href='docs/Seccion17.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Material de transporte.</p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION XVIII Capítulos 90 al 92</strong>{' '}
                      <a href='docs/Seccion18.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>
                      Instrumentos y aparatos de óptica, fotografía o
                      cinematografía, de medida, control o precisión;
                      instrumentos y aparatos medicoquirúrgicos; aparatos de
                      relojería; instrumentos musicales; partes y accesorios de
                      estos instrumentos o aparatos.
                    </p>
                  </li>
                  <li class='list-group-item'>
                    {' '}
                    <p className='pt-3'>
                      <strong>SECCION XIX Capítulo 93</strong>{' '}
                      <a href='docs/Seccion19.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Armas, municiones, y sus partes y accesorios.</p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION XX Capítulos 94 al 96</strong>{' '}
                      <a href='docs/Seccion20.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Mercancías y productos diversos.</p>
                  </li>
                  <li class='list-group-item'>
                    <p className='pt-3'>
                      <strong>SECCION XXI Capítulos 97 al 99</strong>{' '}
                      <a href='docs/Seccion21.pdf' className='docs-download'>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </a>
                    </p>
                    <p>Objetos de arte o colección y antigüedades.</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Tariff;
