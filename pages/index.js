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
                terrestre, carga de proyectos específicos y su logística. Revisa
                nuestras tarifas!
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
                    <div class="card-body">
                      <h4 class="card-title mt-4">{tariff.title}</h4>
                      <h2 class="card-text my-4">
                        {' '}
                        {tariff.price}{' '}
                        <small className="text-muted">{tariff.unit}</small>
                      </h2>
                      <p
                        class="card-text text-center mb-4"
                        style={{
                          maxWidth: '8rem',
                          margin: 'auto',
                        }}
                      >
                        {tariff.content}
                      </p>
                      <button type="button" class="btn btn-success">
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
      {/* <style jsx>{`
          .card {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
          }

          .card-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
          }

          .card-header h4 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .card-body {
            flex: 1 1 auto;
            padding: 1.25rem;
          }

          .card-body .card-title {
            text-transform: none !important;
            font-size: 3.5rem;
            margin-top: 0;
            margin-bottom: 1.5rem;
          }

          ul,
          ol {
            margin-top: 0;
            margin-bottom: 1.6rem;
          }
        `}</style> */}
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await axios('http://localhost:3000/api/tariffs');
  const json = await res.data;
  return { json };
};

export default Home;
