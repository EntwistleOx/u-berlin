import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from './Footer';
import TopBar from './TopBar';
import TopNav from './TopNav';

const Layout = ({ children, pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#ffffff' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        content='U-Berlin Logistics, Nos especializamos en transporte marítimo, aéreo y terrestre.'
      />
      <meta property='og:title' content='U-Berlin Logistics' key='ogtitle' />
      <meta
        property='og:description'
        content='U-Berlin Logistics, Nos especializamos en transporte marítimo, aéreo y terrestre.'
        key='ogdesc'
      />
      {/* Twitter */}
      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='Juan Díaz' key='twhandle' />
      {/* Open Graph */}
      <meta
        property='og:url'
        content='https://u-berlin.netlify.app/'
        key='ogurl'
      />
      <meta
        property='og:image'
        content='https://u-berlin.netlify.app/images/preview.png'
        key='ogimage'
      />
      <meta property='og:site_name' content='U-Berlin' key='ogsitename' />
      <meta property='og:title' content='U-Berlin Logistics' key='ogtitle' />
      <meta
        property='og:description'
        content='U-Berlin Logistics, Nos especializamos en transporte marítimo, aéreo y terrestre.'
        key='ogdesc'
      />
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
    </Head>
    <TopBar />
    <TopNav />
    <div className='content-wraper'>{children}</div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
