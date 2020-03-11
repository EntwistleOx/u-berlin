import { Fragment } from 'react';
import Layout from '../components/Layout';

const SolutionsImport = () => {
  return (
    <Layout>
      <Fragment>
        <section id='inner-headline'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='pageTitle'>¿Como Importar?</h2>
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
                      Se puede importarse cualquier mercancía, salvo aquellas
                      que se encuentren expresamente prohibidas por la
                      legislación vigente, como por ejemplo: vehículos y
                      motocicletas usadas, asbesto en cualquiera de sus formas,
                      pornografía, desechos industriales tóxicos, entre otras.
                    </p>

                    <p>
                      En ocasiones, el producto a importar, por su naturaleza,
                      puede estar sujeto a visto bueno, autorización o control
                      por parte de algún servicio fiscalizador, por lo que es
                      necesario obtenerlo, en forma previa, ante el respectivo
                      organismo.{' '}
                    </p>

                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th>Mercancia</th>
                          <th>Organismo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Armas de fuego, municiones, explosivos y sustancias
                            químicas, inflamables y asfixiantes
                          </td>
                          <td>
                            Dirección General de Movilización Nacional
                            (&nbsp;www.dgmn.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Material escrito o audiovisual relativo a las artes
                            marciales destinado a la enseñanza, sin limitación
                            alguna, cualquiera que sea la persona,
                            establecimiento o entidad que efectúe la operación.
                          </td>
                          <td>
                            Dirección General de Movilización
                            Nacional&nbsp;(&nbsp;www.dgmn.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>Alcoholes, bebidas alcohólicas y vinagres</td>
                          <td>
                            Servicio Agrícola y Ganadero
                            (&nbsp;www.sag.gob.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Productos vegetales y mercancías que tengan el
                            carácter de peligrosas para los vegetales.
                          </td>
                          <td>
                            Servicio Agrícola y Ganadero
                            (&nbsp;www.sag.gob.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Animales, productos, subproductos y despojos de
                            origen animal o vegetal.
                          </td>
                          <td>
                            Servicio Agrícola y Ganadero
                            (&nbsp;www.sag.gob.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>Fertilizantes y pesticidas</td>
                          <td>
                            Servicio Agrícola y Ganadero
                            (&nbsp;www.sag.gob.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Productos o subproductos alimenticios de origen
                            animal o vegetal.
                          </td>
                          <td>
                            Servicio Agrícola y Ganadero
                            (&nbsp;www.sag.gob.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>Productos alimenticios de cualquier tipo</td>
                          <td>Servicio de Salud</td>
                        </tr>
                        <tr>
                          <td>
                            Productos farmacéuticos o alimenticios de uso médico
                            y/o cosmético
                          </td>
                          <td>Servicio de Salud</td>
                        </tr>
                        <tr>
                          <td>
                            Estupefacientes y sustancias psicotrópicas que
                            causen dependencia.
                          </td>
                          <td>Servicio de Salud</td>
                        </tr>
                        <tr>
                          <td>
                            Sustancias tóxicas o peligrosas para la salud.
                          </td>
                          <td>Control Alimentos</td>
                        </tr>
                        <tr>
                          <td>
                            Elementos o materiales fértiles, fisionables o
                            radioactivos, sustancias radioactivas, equipos o
                            instrumentos que generan radiaciones ionizantes
                          </td>
                          <td>
                            Comisión Chilena de Energía Nuclear
                            (&nbsp;www.cchen.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Recursos hidrobiológicos, cualquiera sea su estado
                            de desarrollo, incluidas las especies de carácter
                            ornamental
                          </td>
                          <td>
                            Subsecretaría de Pesca (&nbsp;www.subpesca.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>Productos pesqueros</td>
                          <td>
                            Subsecretaría de Pesca (&nbsp;www.subpesca.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Equipos de radiocomunicaciones. Requieren
                            autorización previa de uso de banda de transmisión
                          </td>
                          <td>
                            Subsecretaría de Telecomunicaciones
                            (&nbsp;www.subtel.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Restos humanos o cenizas de incineración de los
                            mismos
                          </td>
                          <td>
                            Ministerio de Salud, Hospital San Juan de Dios
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Desperdicios y desechos de pilas, baterías y
                            acumuladores; desechos de cinc, de plomo, de
                            antimonio, berilio, cadmio, cromo, de productos
                            farmacéuticos, de disolventes orgánicos.
                          </td>
                          <td>
                            Ministerio de Salud (&nbsp;www.minsal.cl&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Especies de fauna y flora silvestres protegidas por
                            el Convenio CITES
                          </td>
                          <td>
                            Autoridad&nbsp;definida de acuerdo al artículo IX de
                            la Convención (&nbsp;www.cites.org&nbsp;)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            La importación de cementos susceptibles de ser
                            empleados en la confección de elementos de
                            resistencia de obras públicas y edificios.
                          </td>
                          <td>
                            Previo a su desaduanamiento deben presentar
                            Certificado de Calidad, emitido por un Laboratorio
                            de Control Técnico de Calidad de Construcción,
                            inscrito en el Registro oficial de Laboratorios de
                            Control Técnico de Calidad de Construcción del
                            Ministerio de Vivienda y Urbanismo.
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <strong>
                      No se pueden importar los siguientes productos:
                    </strong>

                    <ul className='withArrow'>
                      <li>
                        <span className='fa fa-angle-right'></span>Vehículos
                        usados (sin perjuicio de las franquicias establecidas en
                        la normas vigentes).
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Motos usadas.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Neumáticos
                        usados y recauchados.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Asbesto en
                        cualquiera de sus formas.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Pornografía.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Desechos
                        industriales tóxicos.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Mercancías
                        que sean peligrosas para los animales, para la
                        agricultura o la salud humana (por ejemplo; algunos
                        plaguicidas de uso agrícola, juguetes y artículos de uso
                        infantil que contengan tolueno, adhesivos fabricados en
                        base a solventes volátiles), las que se encuentran
                        prohibidas por Decreto del Ministerio de Salud, del
                        Ministerio de Agricultura y otros organismos del Estado.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Otras
                        mercancías, que de acuerdo a la legislación vigente, se
                        encuentren con prohibición de importar.
                      </li>
                    </ul>

                    <p>
                      Dependiendo del valor de la mercancía el proceso de
                      importación tiene dos sistemas:
                    </p>

                    <p>
                      Si las mercancías no tienen carácter comercial, y que
                      porten los viajeros y se acojan a la Partida 009, hasta
                      por un valor de US$ 3.000 FOB, y para las mercancías con
                      carácter comercial, hasta por un valor de US$ 1.000
                      facturado: el trámite lo puede hacer personalmente el
                      importador ante la Aduana respectiva, en forma
                      simplificada.{' '}
                    </p>

                    <p>
                      En este caso, el importador debe presentar los siguientes
                      documentos:
                    </p>

                    <ul className='withArrow'>
                      <li>
                        <span className='fa fa-angle-right'></span>Documento de
                        transporte (BL, AWB o CRT).
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Factura
                        comercial.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Poder
                        notarial del dueño o consignatario para un despacho
                        determinado, en los casos en que la persona que trámite
                        sea un tercero.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Vistos Buenos
                        o Certificaciones si son necesarias.
                      </li>
                    </ul>

                    <p>
                      Si el valor de la mercancía supera los US$1.000 valor FOB:
                      el importador debe contratar un agente de aduanas.
                    </p>

                    <p>
                      Respecto de los documentos de base, es necesario precisar,
                      que existen algunos que son obligatorios para toda
                      importación con carácter comercial, y otros documentos que
                      se requieren sólo en determinadas ocasiones.
                    </p>

                    <p>
                      Dentro de los documentos obligatorios para toda
                      importación con carácter comercial se encuentran los
                      siguientes:
                    </p>

                    <ul className='withArrow'>
                      <li>
                        <span className='fa fa-angle-right'></span>Conocimiento
                        de embarque original(BL), CRT o guía aérea(AWB), que
                        acredite el dominio de la mercancía por parte del
                        consignatario.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Factura
                        comercial original, que acredite la mercancía objeto de
                        compraventa y sus valores.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Declaración
                        Jurada del importador sobre el precio de las mercancías,
                        formulario que entrega el agente de aduanas.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Mandato
                        constituido por el sólo endoso del original del
                        conocimiento de embarque.
                      </li>
                    </ul>

                    <p>
                      Dentro de los documentos que se requieren sólo para
                      ciertas operaciones de importación se encuentran los
                      siguientes:
                    </p>

                    <ul className='withArrow'>
                      <li>
                        <span className='fa fa-angle-right'></span>Certificado
                        de Origen , en caso que la importación se acoja a alguna
                        preferencia arancelaria, en virtud de un Acuerdo
                        Comercial.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Lista de
                        empaque, cuando proceda, correspondiendo siempre en caso
                        de mercancías acondicionadas en contenedores.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Certificado
                        de seguros, cuando el valor de la prima no se encuentre
                        consignado en la factura comercial.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Nota de
                        Gastos, cuando éstos no estén incluidos en la factura
                        comercial.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Permisos,
                        visaciones, certificaciones o vistos buenos, cuando
                        proceda.
                      </li>
                    </ul>

                    <p>
                      Por regla general, las importaciones están afectas al pago
                      del derecho ad valorem (6%) sobre su valor CIF (costo de
                      la mercancía + prima del seguro + valor del flete de
                      traslado)y pago del IVA (19%) sobre su valor CIF más el
                      derecho ad valorem.
                    </p>

                    <p>EJEMPLO DE CÁLCULO:</p>

                    <ul className='withArrow'>
                      <li>
                        <span className='fa fa-angle-right'></span>Valor CIF US
                        $1.000,00
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Derecho ad
                        valorem (6% de 1.000) US $ 60,00
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>IVA (19%)
                        (sobre 1.060,00) US $ 201,40
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>TOTAL
                        TRIBUTOS ADUANEROS US $ 261,40
                      </li>
                    </ul>

                    <p>
                      En algunos casos, dependiendo de la naturaleza de la
                      mercancía, se requiere pagar impuestos especiales, sobre
                      la misma base impositiva (valor CIF + derecho ad valorem
                      ). En otras ocasiones, las mercancías están afectas a
                      derechos específicos, de acuerdo a los rangos que en cada
                      caso se establecen (por ejemplo: trigo y azúcar). En los
                      casos en que se autoriza su importación, las mercancías
                      usadas pagan un recargo adicional del 3% sobre su valor
                      CIF, además de los tributos a los que están afectas, según
                      su naturaleza.
                    </p>

                    <p>
                      En caso de mercancías originarias de algún país con el
                      cual Chile ha suscrito un acuerdo comercial, el derecho ad
                      valorem puede quedar libre o afecto a una rebaja
                      porcentual.
                    </p>

                    <p>
                      Mercancías afectas al pago de impuestos adicionales en su
                      importación, se pueden mencionar entre otras:{' '}
                    </p>

                    <p>
                      Con un impuesto adicional de 15%( sobre el valor aduanero
                      de la mercancía + derecho ad valorem):{' '}
                    </p>

                    <ul className='withArrow'>
                      <li>
                        <span className='fa fa-angle-right'></span>Artículos de
                        oro, platino y marfil.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Joyas,
                        piedras preciosas naturales o sintéticas.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span> Alfombras
                        finas y tapices finos Alfombras finas, tapices finos y
                        cualquier otro artículo de similar naturaleza;
                        calificados como tales por el Servicio de Impuestos
                        Internos.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Pieles finas,
                        calificadas como tales por el Servicio de Impuestos
                        Internos, manufacturadas o no.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Conservas de
                        caviar y sus sucedáneos.
                      </li>
                      <li>
                        <span className='fa fa-angle-right'></span>Armas de aire
                        o gas comprimido, sus accesorios y proyectiles, con
                        excepción de las de caza submarina.
                      </li>
                    </ul>

                    <p>
                      Con un impuesto adicional de 50% (sobre el valor aduanero
                      de la mercancía + derecho ad valorem): Artículos de
                      pirotecnia, tales como fuegos artificiales, petardos y
                      similares, excepto los de uso industrial, minero o
                      agrícola o de señalización luminosa.
                    </p>

                    <p>
                      Las bebidas alcohólicas y no alcohólicas pagan, además del
                      derecho ad valorem e IVA, los siguientes impuestos
                      adicionales, según producto:
                    </p>

                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Impuesto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Aguas minerales, bebidas artificiales y jarabes
                          </td>
                          <td>10%</td>
                        </tr>
                        <tr>
                          <td>Vinos, champaña, sidra y cervezas</td>
                          <td>20,5%</td>
                        </tr>
                        <tr>
                          <td>
                            Licores, piscos, whisky, aguardientes y destilados,
                            incluidos los vinos licorosos o aromatizados
                            similares al vermouth
                          </td>
                          <td>31,5%</td>
                        </tr>
                      </tbody>
                    </table>

                    <p>
                      La importación de tabacos está afecta a los siguientes
                      impuestos, según su variedad:
                    </p>

                    <table className='table table-striped'>
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Impuesto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Cigarros puros</td>
                          <td>52,6%</td>
                        </tr>
                        <tr>
                          <td>Cigarrillos</td>
                          <td>
                            Impuesto Específico de 0,0010304240 UTM por
                            cigarrillo, y un impuesto de 30% sobre el precio de
                            venta consumidor, incluido impuestos, por paquete,
                            cajas o envoltorios
                          </td>
                        </tr>
                        <tr>
                          <td>Tabaco elaborado</td>
                          <td>59,7%</td>
                        </tr>
                      </tbody>
                    </table>

                    <p>
                      La importación de las máquinas y aparatos para el
                      tratamiento o procesamiento de datos, se encuentra libre
                      de derechos de aduana por aplicación de la cláusula de la
                      nación más favorecida, siendo irrelevante el origen o
                      procedencia de la mercancía.
                    </p>

                    <p>
                      De esta forma, los computadores sólo pagan el IVA (19%).
                      En el caso de los computadores usados procedentes de USA y
                      Corea no pagan el recargo por uso; sólo pagan el IVA sobre
                      el valor CIF.
                    </p>

                    <p>
                      La importación de libros, revistas y otros impresos para
                      la lectura, cultura o estudio se encuentran libres del
                      pago del derecho ad valorem en virtud de la aplicación del
                      Tratado de Uruguay. Sin embargo, la importación de libros,
                      folletos, diarios, revistas, composiciones musicales y
                      demás publicaciones periódicas, siempre debe pagar el IVA.{' '}
                    </p>

                    <p>
                      Por expresa disposición del Convenio, quedan excluidos del
                      beneficio los libros que tiendan a realizar propaganda que
                      afecte al orden político, social o moral de los países
                      signatarios, o que sean de publicidad.
                    </p>
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

export default SolutionsImport;
