/* eslint-disable react/prop-types */
import Head from 'next/head';
import Footer from '../Footer';
import TopBar from '../TopBar';
import TopNav from '../TopNav';

const Layout = ({ children, pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta name='msapplication-TileColor' content='#2d89ef' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
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

export default Layout;
