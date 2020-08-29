import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './css/bootstrap.css';
import './css/styles.css';

config.autoAddCss = false;

// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
