import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import TopBar from './TopBar';
import TopNav from './TopNav';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>U-Berlin Logistics</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="U-Berlin Logistics" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/styles.css" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <TopBar />
      <TopNav />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
