function Person(props) {
  return (
    <svg
      width='1rem'
      height='1rem'
      viewBox='0 0 16 16'
      className='prefix__bi prefix__bi-person-fill'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z'
      />
    </svg>
  );
}

export default Person;
