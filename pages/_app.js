import '../style/index.scss';

// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
