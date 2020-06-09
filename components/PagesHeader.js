import Container from 'react-bootstrap/Container';

const PagesHeader = ({ title }) => {
  return (
    <section id="pages-header">
      <Container>
        <h2 className="page-title py-4 text-center">{title}</h2>
      </Container>
    </section>
  );
};

export default PagesHeader;
