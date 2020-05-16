import nextConnect from 'next-connect';
import bcrypt from 'bcrypt';
import withMiddleware from '../../middlewares/withMiddleware';

const handler = nextConnect();

handler.use(withMiddleware);

handler.post(async (req, res) => {
  const { name, password, email } = req.body;
  try {
    if (!password || !name) throw new Error('Missing fields.');

    const countEmail = await req.db
      .collection('users')
      .countDocuments({ email });

    if (countEmail > 0) throw new Error('The email has already beed used.');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await req.db
      .collection('users')
      .insertOne({ email, password: hashedPassword, name })
      .then(({ ops }) => ops[0]);

    req.logIn(user, err => {
      if (err) throw err;
      res.status(201).json({
        ok: true,
        message: 'User signed successfully.'
      });
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.toString()
    });
  }
});

export default handler;
