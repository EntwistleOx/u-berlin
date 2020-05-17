const PagesHeader = ({ title }) => {
  return (
    <section id="pages-header">
      <div className="bg-dark">
        <div className="container">
          <h2 className="page-title py-4 text-center">{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
