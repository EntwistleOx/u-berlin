import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { attributes, react as HomeContent } from '../content/tariffs.md';

const Home = () => {
  let { title, cats } = attributes;

  return (
    <Layout>
      <header className="masthead text-white text-center">
        <canvas className="overlay"></canvas>
        <Container>
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
        </Container>
      </header>

      <section className="tarrifs bg-light">
        <Container>
          <div className="row ">
            <article>
              <h1>{title}</h1>
              <HomeContent />
              <ul>
                {cats.map((cat, k) => (
                  <li key={k}>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                  </li>
                ))}
              </ul>
            </article>
            {/* {json.data.map((tariff) => {
              return (
                <div key={tariff._id} className="col-md-4 text-center">
                  <div
                    className="card mb-5 mx-auto"
                    style={{ maxWidth: '18rem', height: '24rem' }}
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
                      <Link href="contact">
                        <Button variant="success">Contactanos!</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  // const res = await axios('http://localhost:3000/api/tariffs');
  // const json = await res.data;
  const json = { title: 'titulo' };
  return { json };
};

export default Home;
