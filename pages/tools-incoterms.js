import { Fragment } from 'react';
import Layout from '../components/Layout';

const ToolsIncoterms = () => {
  return (
    <Layout>
      <Fragment>
        <section id='inner-headline'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='pageTitle'>Incoterms</h2>
              </div>
            </div>
          </div>
        </section>
        <section id='content'>
          <div className='container'>
            <div className='row showcase-section'>
              <div className='col-md-12'>
                <img
                  className='img-responsive'
                  src='images/incoterms.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
};

export default ToolsIncoterms;
