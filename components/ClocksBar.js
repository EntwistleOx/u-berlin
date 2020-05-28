import Clock from 'react-live-clock';
import ReactCountryFlag from 'react-country-flag';
import Container from 'react-bootstrap/Container';

const ClocksBar = () => {
  return (
    <section id="clocksBar">
      <Container className="text-dark">
        <div class="d-flex flex-row justify-content-between align-items-center">
          <div className="clocks">
            <ReactCountryFlag countryCode="CL" svg />
            <Clock
              format={'HH:mm'}
              ticking={true}
              timezone={'America/Santiago'}
            />
          </div>
          <div className="clocks">
            <ReactCountryFlag countryCode="JP" svg />
            <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Tokyo'} />
          </div>
          <div className="clocks">
            <ReactCountryFlag countryCode="GB" svg />
            <Clock format={'HH:mm'} ticking={true} timezone={'Europe/London'} />
          </div>
          <div className="clocks">
            <ReactCountryFlag countryCode="US" svg />

            <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClocksBar;
