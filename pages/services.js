import { Fragment } from 'react';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <Layout>
      <Fragment>
        <PagesHeader title={'Nuestros Servicios'} />

        <section id="services">
          <div className="container">
            {/* Sea Cargo */}
            <div className="row pt-4">
              <div className="col-lg-6 service1-showcase"></div>
              <div className="col-lg-6">
                <div className="text-justify p-2 ">
                  <h3>
                    Transporte <span className="text-color">Maritimo</span>
                  </h3>
                  <p>
                    El 90% del intercambio comercial chileno se realiza por vía
                    marítima, lo que lo convierte en el principal medio de
                    transporte de mercancías, junto a esto, Chile está
                    posicionado geográficamente y estratégicamente de manera
                    privilegiada para el transporte marítimo de mercancías,
                    principalmente con países del Asia-Pacifico, a esto se aúnan
                    los acuerdos comerciales con las principales economías de
                    esta zona: China, Japón, Corea del Sur, Nueva Zelanda,
                    Australia y nuestros países vecinos.
                  </p>
                  <p>
                    amplia experiencia en transporte marítimo internacional de
                    cargas nos permite ofrecer un servicio de calidad, ayudando
                    en la tramitación y documentación necesarias tanto en
                    importación como exportación.
                  </p>
                </div>
              </div>
            </div>
            {/* Air Cargo */}
            <div className="row">
              <div className="col-lg-6">
                <div className="text-justify p-2 ">
                  <h3>
                    Transporte <span className="text-color">Aereo</span>
                  </h3>
                  <p>
                    En U-Berlin entendemos perfectamente la urgencia de sus
                    envios, diseñando soluciones flexibles a su medida mediante
                    transporte aereo de carga.El transporte aereo es el medio
                    mas rapido de envio de mercancias que existe en la
                    actualidad. Ademas, este tipo de transporte es el mas seguro
                    para su carga al tener el indice mas bajo de siniestralidad.
                    Puede utilizar transporte aereo tanto si necesita realizar
                    envios urgentes, o si necesita enviar muestras pequeñas.
                    Como agente de carga nos encargamos de reservar los espacios
                    en aviones, asi como de realizar la documentacion
                    pertinente, de igual manera la consolidacion de cargas,
                    trazar las rutas y planificar las entregas, todo esto,
                    tratando siempre de optimizar los costos de nuestros
                    clientes.
                  </p>
                  <p>
                    transporte aereo es la unica solucion para aquellos envios
                    de productos perecederos que, o por su corto tiempo de vida,
                    o bien porque no hay alternativa maritima refrigerada, estos
                    deben ser enviados por avion.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 service2-showcase"></div>
            </div>
            {/* Ground Cargo */}
            <div className="row">
              <div className="col-lg-6 service3-showcase"></div>
              <div className="col-lg-6">
                <div className="text-justify p-2 ">
                  <h3>
                    Transporte <span className="text-color">Terrestre</span>
                  </h3>
                  <p>
                    Damos soluciones en transporte de carga por via terrestre
                    tanto a nivel nacional como internacional. Cumplimos con sus
                    requisitos de tiempo deentrega, ofrecemos un servicio
                    personalizado, recogemos su carga en bodega de origen y la
                    entregamos en la bodega de destino. Nuestros servicios de
                    carga incluyen:
                  </p>

                  <ul className="withArrow">
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Carga
                      Suelta.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} />{' '}
                      Contenedores.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Carga
                      Refrigerada.
                    </li>
                  </ul>

                  <p>Transporte internacional terrestre a:</p>
                  <ul className="withArrow">
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Argentina.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Brazil
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Uruguay.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Paraguay.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Peru.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Bolivia.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Projects */}
            <div className="row pb-4">
              <div className="col-lg-6">
                <div className="text-justify p-2 ">
                  <h3>
                    Cargas de <span className="text-color">Proyectos</span>
                  </h3>
                  <p>
                    U-Berlin le ayuda en los complejos requisitos logisticos que
                    implican el transporte de equipos pesados y de gran
                    magnitud. Le ofrecemos un servicio de transportes y gestion
                    de proyectos integrados, con el fin de garantizar que su
                    carga llegue a su destino de acuerdo a lo planificado.
                    Nuestro equipo de trabajo cuenta con el pensamiento creativo
                    necesarios para generar e implementar soluciones eficientes
                    y eficaces. Creamos un plan de transporte personalizado a
                    cada caso, con sus costes de transporte, garantizando que se
                    cumpla el itinerario y los medios de transporte adecuados.
                  </p>
                  <p>
                    Diseñamos e implementamos soluciones adaptadas a diferentes
                    industrias:
                  </p>
                  <ul className="withArrow">
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Ingeniería,
                      aprovisionamiento y construcción.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Industria
                      química y del gas.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Energía
                      eléctrica.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Proyectos de
                      infraestructura.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Mineria
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Eventos.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 service4-showcase"></div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Services;
