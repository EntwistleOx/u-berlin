import { Fragment } from 'react';
import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import Image from 'react-bootstrap/Image';

const ToolsIncoterms = () => {
  return (
    <Layout>
      <Fragment>
        <PagesHeader title={'Incoterms'} />

        <section id="incoterms" className="overflow-hidden">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-12">
                <Image fluid src="images/incoterms.png" alt="Incoterms" />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
};

export default ToolsIncoterms;
