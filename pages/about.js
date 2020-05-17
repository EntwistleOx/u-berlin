import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';

const About = () => {
  return (
    <Layout>
      <PagesHeader title={'nosotros'} />
      <section id="about">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-6 about-showcase"></div>
            <div className="col-lg-6">
              <div className="text-justify p-2 ">
                <h3>
                  Nuestra <span className="text-color">Compañia</span>
                </h3>
                <p>
                  U-Berlin nace de la visión de empresarios del sector que
                  vieron una oportunidad y la necesidad de dar un servicio de
                  calidad y personalizado a sus clientes.
                </p>
                <p>
                  Nuestra Visión es ser la compañía elegida por nuestra
                  dedicación, calidad de servicio y por entregar soluciones
                  creativas e innovadoras. Queremos ser reconocidos por nuestra
                  calidad humana y profesional que nos permite entregar un
                  servicio personalizado y de calidad.
                </p>
                <p>
                  Como Misión, ayudamos a nuestros clientes a alcanzar sus metas
                  de negocios a través de nuestras soluciones y servicios
                  logísticos. Queremos lograr, junto con nuestros colaboradores,
                  un crecimiento sostenible y desarrollo profesional a largo
                  plazo.
                </p>
                <p>
                  Nos especializamos en transportes marítimo, aéreos y
                  terrestre, carga de proyectos específicos y su logística. Esto
                  lo hacemos a través de un equipo humano y profesional
                  altamente capacitado en cada una de las áreas de gestión y
                  operaciones que permiten entregar un servicio óptimo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
