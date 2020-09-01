import Container from 'react-bootstrap/Container';
import { attributes as contact } from '../../content/contact.md';
import Envelope from '../Icons/Envelope';
import Facebook from '../Icons/Facebook';
import Linkedin from '../Icons/Linkedin';
import Phone from '../Icons/Phone';
import styles from './TopBar.module.css';

const TopBar = () => (
  <section className={styles.topbar}>
    <Container className='d-flex align-items-center justify-content-center justify-content-md-start py-1'>
      <div className='mr-4'>
        <a
          href={contact.facebook}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray'
        >
          <Facebook />
        </a>
      </div>
      <div className='mr-4'>
        <a
          href={contact.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray'
        >
          <Linkedin />
        </a>
      </div>
      <div className='mr-4'>
        <a href={`mailto:${contact.email}`} className='text-gray'>
          <Envelope />
        </a>
      </div>
      <div>
        <a href={`tel:${contact.phone}`} className='text-gray'>
          <Phone />
        </a>
      </div>
    </Container>
  </section>
);

export default TopBar;
