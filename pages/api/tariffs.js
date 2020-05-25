import nextConnect from 'next-connect';
import withMiddleware from '../../middlewares/withMiddleware';

const handler = nextConnect();

handler.use(withMiddleware);

handler.get(async (req, res) => {
  try {
    const tariffs = await req.db.collection('tariffs').find({}).toArray();
    res.json({
      ok: true,
      data: tariffs,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.toString(),
    });
  }
});

export default handler;
