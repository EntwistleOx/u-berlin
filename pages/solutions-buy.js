import { Fragment } from 'react';
import Layout from '../components/Layout';

const SolutionsBuy = () => {
  return (
    <Layout>
      <Fragment>
        <section id='inner-headline'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='pageTitle'>Compras por Internet</h2>
              </div>
            </div>
          </div>
        </section>
        <section id='content'>
          <section className='section-padding'>
            <div className='container'>
              <div className='row showcase-section'>
                <div className='col-md-12'>
                  <div className='about-text text-justify'>
                    <p>
                      Cuando compras en el extranjero estás haciendo una
                      importación, por lo que tu compra debe cumplir las normas
                      establecidas para el ingreso al país, lo que puede incluir
                      revisión y pago de derechos e impuestos.
                    </p>

                    <p>
                      Se puede importar cualquier producto, salvo aquellas
                      mercancías expresamente prohibidas por la ley.
                    </p>

                    <strong>No podrás ingresar al país:</strong>

                    <p>
                      Mercancías como falsificaciones de marca, sustancias
                      ilícitas o tóxicas, especies protegidas, piezas
                      patrimoniales, entre otras. Estos productos se retienen
                      temporalmente y se incautan definitivamente, por lo tanto,
                      no los recibirás porque no pueden ingresar al país.
                    </p>

                    <p>
                      Requieren de Visto Bueno de otros organismos como por
                      ejemplo, productos alimenticios (Ministerio de Salud), de
                      origen vegetal (SAG), farmacéuticos y médicos (Instituto
                      de Salud Pública), fertilizantes (SAG), productos
                      pesqueros (Subsecretaría de Pesca), equipos de
                      radiocomunicaciones (Subtel), entre otros.
                    </p>

                    <p>
                      El responsable de la tramitación de V°B° es el
                      comprador/importador. Si se informa, puede tramitar antes
                      dicha certificación en los organismos competentes,
                      acortando los tiempos de espera en que aduana puede
                      autorizar la internación del producto.
                    </p>

                    <p>
                      Cuando compres por Internet, ya sea a través de una página
                      web o de una casilla de correo en el extranjero, tu
                      producto puede ser despachado a Chile vía Courier, que
                      prestan servicios de recolección, transporte, recepción y
                      entrega de este tipo de envíos, que tienen responsabilidad
                      sobre las mercancías durante toda la prestación del
                      servicio.
                    </p>

                    <p>
                      Estas últimas son las encargadas de efectuar la
                      importación de tu mercancía cuando el monto de ésta no
                      supere los 3.000 dólares. Esto incluye el pago en
                      Tesorería de los impuestos y gravámenes cuando los has
                      cancelado en la página web extranjera al momento de la
                      compra.
                    </p>

                    <strong>
                      ¿Qué documentos necesito para la importación?
                    </strong>

                    <ul className='withArrow'>
                      <li>
                        <span className='fa fa-angle-right'></span>La Guía
                        Courier.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>La factura
                        comercial, boleta de compraventa; facturas pro-forma o
                        comprobante de transacción electrónica. En este tipo de
                        documentos debe estar consignado el tipo, descripción, y
                        cantidad de las mercancías, así como sus precios y todos
                        los costos involucrados, incluidos los del envío. Ello
                        permitirá a Aduanas realizar correctamente los cálculos
                        de impuestos y gravámenes.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Vistos buenos
                        o certificados cuando corresponda.
                      </li>
                    </ul>

                    <p>
                      Sí. Debes pagar el Arancel Aduanero (6%), a menos de que
                      el producto adquirido pueda acogerse a beneficios
                      arancelarios establecidos en un acuerdo comercial y cuente
                      con la prueba de origen respectiva. También debes pagar el
                      Impuesto al Valor Agregado (19%).
                    </p>

                    <p>
                      Cuando tu compra es ocasional, no será comercializada y
                      tiene un valor menor a 30 dólares, quedará libre del pago
                      de derechos de aduana e IVA.
                    </p>

                    <p>Libros y revistas Sólo pagan el IVA (19%)</p>

                    <strong>Importante:</strong>
                    <p>
                      Infórmate bien antes de confirmar tu compra, Asegúrate de
                      estar adquiriendo productos originales.
                    </p>
                    <p>
                      El ingreso de productos falsificados dará origen a
                      denuncias, multas y el decomiso de la mercancía.
                    </p>
                    <p>
                      Exige y guarda los comprobantes de tu compra, los que
                      deben contener la información completa de los productos
                      adquiridos.
                    </p>
                    <p>
                      Recuerda que esos documentos permitirán realizar los
                      cálculos correctos de los impuestos y gravámenes que
                      deberás pagar, en caso de que corresponda.
                    </p>

                    <div className='row showcase-section'>
                      <div className='col-md-12'>
                        <img
                          className='img-responsive'
                          src='images/compras_web.jpg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Fragment>
    </Layout>
  );
};

export default SolutionsBuy;
