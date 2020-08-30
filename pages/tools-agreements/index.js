import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Clocks from '../../components/Clocks';
import Layout from '../../components/Layout';
import PagesHeader from '../../components/PagesHeader';

const ToolsAgreements = () => (
  <Layout pageTitle='U-Berlin | Acuerdos Internacionales'>
    <>
      <PagesHeader title='Acuerdos Internacionales' />
      <Clocks />
      <section id='tools-agreements' className='py-4'>
        <Container>
          <Row className='showcase'>
            <Col lg={6} className='agreements-showcase showcase-img' />
            <Col lg={6}>
              <div className='text-justify p-2'>
                <p>
                  Desde fines de la década de 1990, Chile se ha adherido a una
                  serie de tratados de libre comercio (TLC) y Acuerdos de
                  asociación económica con países tanto de Latinoamérica como
                  del resto del mundo, destacando entre ellos los firmados con
                  las principales economías del mundo: Estados Unidos, China y
                  la Unión Europea. A la fecha a través de los tratados y
                  acuerdos de comercio firmados, Chile actualmente posee libre
                  acceso a los principales mercados en el mundo, alcanzando más
                  de 4200 millones de personas distribuidas en los cinco
                  continentes.
                </p>

                <p>
                  Además de los tratados de libre comercio, y los acuerdos de
                  asociación económica —que apuntan hacia la apertura
                  arancelaria y permiten acuerdos en materias no comerciales—
                  existen también otros tipos de tratados en materia de
                  comercio, como los Acuerdos de Complementación Económica
                  (ACE), y los acuerdos de alcance parcial. Los primeros
                  consisten en acuerdos bilaterales de países pertenecientes a
                  la Asociación Latinoamericana de Integración (ALADI). Chile ha
                  suscrito ACE con Venezuela (firmado en 1993), Bolivia (firmado
                  en 1993), Ecuador (firmado en 1994), y en 1996 con el Mercado
                  Común del Sur (Mercosur), cuyos miembros son Argentina,
                  Brasil, Paraguay y Uruguay. Por otro lado, los acuerdos de
                  alcance parcial se refieren a medidas arancelarias para
                  denominados productos, y se considera una primera etapa para
                  un tratado de mayor alcance; Chile tiene acuerdos de este tipo
                  con Cuba (firmado en 1999 y ratificado en 2008) e India
                  (firmado en 2006 y ratificado en 2007).
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className='text-justify mt-4'>
              <table className='table table-striped table-sm'>
                <thead>
                  <tr>
                    <th>Parte signataria</th>
                    <th>Tipo de acuerdo</th>
                    <th>Régimen de Certificación de origen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Australia</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>Bolivia</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Canadá</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>Centroamérica (1)</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>China</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Colombia</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Corea del sur</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>Cuba</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Ecuador</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>EFTA (2)</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Estados Unidos</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>Hong Kong SAR</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>

                  <tr>
                    <td>Cuba</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Ecuador</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>EFTA (2)</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Estados Unidos</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>Hong Kong SAR</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>India</td>
                    <td>Acuerdo de Alcance Parcial</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Japón</td>
                    <td>Acuerdo de Asociación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Malasia</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Mercosur (3)</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>México</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>P4 (4)</td>
                    <td>Acuerdo de Asociación Económica</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>Panamá</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Autocertificación</td>
                  </tr>
                  <tr>
                    <td>Perú</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Tailandia</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Turquía</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>
                      Unión Europea <span style={{ display: 'none' }} />
                      (5)
                    </td>
                    <td>Acuerdo de Asociación</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Venezuela</td>
                    <td>Acuerdo de Complementación Económica</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Vietnam</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Alianza del Pacífico</td>
                    <td>Protocolo Comercial</td>
                    <td>Certificación por entidad</td>
                  </tr>
                  <tr>
                    <td>Uruguay</td>
                    <td>Acuerdo de Libre Comercio</td>
                    <td>Certificación por entidad</td>
                  </tr>
                </tbody>
              </table>
              <ul>
                <li>
                  (1) Centroamérica: Costa Rica, El Salvador, Guatemala,
                  Honduras y Nicaragua.
                </li>
                <li>(2) EFTA: Islandia, Liechtenstein, Noruega y Suiza.</li>
                <li>
                  (3) Mercosur: Integrado por Argentina, Paraguay, Brasil y
                  Uruguay. Chile participa como país asociado.
                </li>
                <li>
                  (4) P4: Chile, Nueva Zelandia, Singapur y Brunei Darussalam.
                </li>
                <li>
                  (5) Unión Europea: Alemania, Austria, Bélgica, Bulgaria,
                  Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España,
                  Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia,
                  Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia,
                  Portugal, Reino Unido, República Checa, Rumania, Suecia.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  </Layout>
);

export default ToolsAgreements;
