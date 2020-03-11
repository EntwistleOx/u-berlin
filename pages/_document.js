import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          {/* Placed at the end of the document so the pages load faster */}
          {/* <script src='assets/js/jquery.js'></script>
          <script src='assets/js/jquery.easing.1.3.js'></script>
          <script src='assets/materialize/js/materialize.min.js'></script>
          <script src='assets/js/bootstrap.min.js'></script>
          <script src='assets/js/jquery.fancybox.pack.js'></script>
          <script src='assets/js/jquery.fancybox-media.js'></script>
          <script src='assets/js/animate.js'></script>
          <script src='assets/js/modernizr.custom.js'></script>
          <script src='assets/js/jquery.isotope.min.js'></script>
          <script src='assets/js/jquery.magnific-popup.min.js'></script>
          <script src='assets/js/animate.js'></script> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
