import Head from 'next/head';
import Topbar from '../components/Topbar';
import TopNav from './TopNav';
import Footer from '../components/Footer';
import { Fragment } from 'react';

const Layout = ({ props }) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="U-Berlin Logistics" />
        <title>U-Berlin Logistics</title>
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/styles.css" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Topbar />
      <TopNav />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
