import Clock from 'react-live-clock';
import ReactCountryFlag from 'react-country-flag';
import Alert from 'react-bootstrap/Alert';

const Clocks = () => {
  return (
    <section id='hours'>
      <Alert variant='info'>
        <div className='d-flex justify-content-around align-self-center'>
          <div className='clocks'>
            <ReactCountryFlag countryCode='CL' svg className='mr-1' />
            <Clock
              format={'HH:mm'}
              ticking={true}
              timezone={'America/Santiago'}
            />
          </div>
          <div className='clocks'>
            <ReactCountryFlag countryCode='JP' svg className='mr-1' />
            <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Tokyo'} />
          </div>
          <div className='clocks'>
            <ReactCountryFlag countryCode='GB' svg className='mr-1' />
            <Clock format={'HH:mm'} ticking={true} timezone={'Europe/London'} />
          </div>
          <div className='clocks'>
            <ReactCountryFlag countryCode='US' svg className='mr-1' />
            <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
          </div>
        </div>
      </Alert>
    </section>
  );
};

export default Clocks;
