import { MongoClient } from 'mongodb';
// import nextConnect from 'next-connect';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function withDatabase(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  return next();
}

// const withDatabase = nextConnect();

// withDatabase.use(database);

export default withDatabase;
