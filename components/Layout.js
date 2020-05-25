import Head from 'next/head';
import Topbar from '../components/Topbar';
import TopNav from './TopNav';
import Footer from '../components/Footer';
import { Fragment } from 'react';

const Layout = (props) => {
  console.log(props.title);

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="U-Berlin Logistics" />
        <title>U-Berlin Logistics</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />

        <link href="css/styles.css" rel="stylesheet" />
      </Head>
      <Topbar />

      <TopNav />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
