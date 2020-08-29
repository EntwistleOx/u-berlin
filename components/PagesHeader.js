import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const PagesHeader = ({ title }) => (
  <section id='pages-header'>
    <Container>
      <h2 className='page-title py-4 text-center'>{title}</h2>
    </Container>
  </section>
);

PagesHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PagesHeader;
