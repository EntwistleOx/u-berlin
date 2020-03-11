import Head from 'next/head';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';

const Layout = props => {
  return (
    <Fragment>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Web site created using NextJS' />
        <title>U-Berlin Logistics</title>
        <link
          href='https://fonts.googleapis.com/css?family=Quantico&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='assets/materialize/css/materialize.min.css'
          media='screen,projection'
        />
        <link href='assets/css/bootstrap.min.css' rel='stylesheet' />
        <link href='assets/css/fancybox/jquery.fancybox.css' rel='stylesheet' />
        <link href='assets/css/style.css' rel='stylesheet' />

        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <Topbar />
      <Navbar />
      {props.children}
      <Footer />
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }

        .logo-uberlin {
          width: 150px;
        }

        .social-network .clocks {
          font-family: 'Quantico', sans-serif;
          margin-right: 60px;
          font-size: 13px;
          display: inline-flex;
        }

        .btn-dash {
          width: 100%;
        }

        .docs-download {
          vertical-align: middle;
        }
      `}</style>
      {/* Placed at the end of the document so the pages load faster */}
      <script src='assets/js/jquery.js'></script>
      <script src='assets/js/jquery.easing.1.3.js'></script>
      <script src='assets/materialize/js/materialize.min.js'></script>
      <script src='assets/js/bootstrap.min.js'></script>
      <script src='assets/js/jquery.fancybox.pack.js'></script>
      <script src='assets/js/jquery.fancybox-media.js'></script>
      <script src='assets/js/animate.js'></script>
      <script src='assets/js/modernizr.custom.js'></script>
      <script src='assets/js/jquery.isotope.min.js'></script>
      <script src='assets/js/jquery.magnific-popup.min.js'></script>
      <script src='assets/js/animate.js'></script>
    </Fragment>
  );
};

export default Layout;
