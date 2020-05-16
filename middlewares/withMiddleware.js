import nextConnect from 'next-connect';
import withDatabase from './withDatabase';
// import withSession from './withSession';

const withMiddleware = nextConnect();

// const withMiddleware = handler => withDatabase(withSession(handler));
withMiddleware.use(withDatabase);

export default withMiddleware;
