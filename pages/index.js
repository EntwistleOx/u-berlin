import { useState, Fragment } from 'react';
import Layout from '../components/Layout';
import uuid from 'uuid/v4';
import axios from 'axios';

const Home = ({ json }) => {
  const [results, setResults] = useState(json.data);

  return (
    <Layout>
      <header className="masthead text-white text-center">
        <canvas className="overlay"></canvas>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <h1>U-Berlin</h1>
              <p>
                En U-Berlin nos especializamos en transportes marítimo, aéreos y
                terrestre, carga de proyectos específicos y su logística.{' '}
                <strong>Revisa nuestras tarifas!</strong>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="tarrifs bg-light">
        <div className="container">
          <div className="row ">
            {results.map((tariff) => {
              return (
                <div key={tariff._id} className="col-lg-4 text-center">
                  <div
                    className="card mb-5 mx-auto"
                    style={{ maxWidth: '18rem', height: '23rem' }}
                  >
                    <div className="card-body">
                      <h4 className="card-title mt-4">{tariff.title}</h4>
                      <h2 className="card-text my-4">
                        {' '}
                        {tariff.price}{' '}
                        <small className="text-muted">{tariff.unit}</small>
                      </h2>
                      <p
                        className="card-text text-center mb-4"
                        style={{
                          maxWidth: '8rem',
                          margin: 'auto',
                        }}
                      >
                        {tariff.content}
                      </p>
                      <button type="button" className="btn btn-success">
                        Contactanos!
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await axios('http://localhost:3000/api/tariffs');
  const json = await res.data;
  return { json };
};

export default Home;
