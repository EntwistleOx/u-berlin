import PropTypes from 'prop-types';
import { config } from '@fortawesome/fontawesome-svg-core';

import './css/bootstrap.css';
import './css/styles.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.node.isRequired,
};
