import { Fragment } from 'react';
import Layout from '../components/Layout';

const ToolsContainers = () => {
  return (
    <Layout>
      <Fragment>
        <section id='inner-headline'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className='pageTitle'>Contenedores</h2>
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
                  src='images/contenedores.jpg'
                  alt='contenedores'
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
