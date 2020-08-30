import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import styles from './PagesHeader.module.css';

const PagesHeader = ({ title }) => (
  <section className={styles.pagesHeader}>
    <Container>
      <h2 className={`${styles.pageTitle} py-4 text-center`}>{title}</h2>
    </Container>
  </section>
);

PagesHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PagesHeader;
