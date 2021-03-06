import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import ReactCountryFlag from 'react-country-flag';
import Clock from 'react-live-clock';
import styles from './Clocks.module.css';

const Clocks = () => (
  <section>
    <Alert variant='info'>
      <Container>
        <div className='d-flex justify-content-between align-self-center'>
          <div className={styles.clocks}>
            <ReactCountryFlag
              countryCode='CL'
              svg
              className='mr-1'
              alt='santiago'
            />
            <Clock format='HH:mm' ticking timezone='America/Santiago' />
          </div>
          <div className={styles.clocks}>
            <ReactCountryFlag
              countryCode='JP'
              svg
              className='mr-1'
              alt='tokyo'
            />
            <Clock format='HH:mm' ticking timezone='Asia/Tokyo' />
          </div>
          <div className={styles.clocks}>
            <ReactCountryFlag
              countryCode='GB'
              svg
              className='mr-1'
              alt='london'
            />
            <Clock format='HH:mm' ticking timezone='Europe/London' />
          </div>
          <div className={styles.clocks}>
            <ReactCountryFlag
              countryCode='US'
              svg
              className='mr-1'
              alt='san francisco'
            />
            <Clock format='HH:mm' ticking timezone='US/Pacific' />
          </div>
        </div>
      </Container>
    </Alert>
  </section>
);

export default Clocks;
