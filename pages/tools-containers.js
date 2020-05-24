import { Fragment } from 'react';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';

const ToolsContainers = () => {
  return (
    <Layout>
      <Fragment>
        <PagesHeader title={'Contenedores'} />

        <section id="containers" className="overflow-hidden">
          <div className="py-4">
            <div className="row">
              <div className="col-md-12">
                <img
                  className="img-fluid"
                  src="images/contenedores.jpg"
                  alt="contenedores"
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
};

export default ToolsContainers;
