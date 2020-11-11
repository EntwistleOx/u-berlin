async function validateHuman(token) {
  const secret = process.env.SITE_RECAPTCHA_SECRET;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data.success;
}

export default async (req, res) => {
  const { token } = req.body;

  const isHuman = await validateHuman(token);

  if (!isHuman) {
    res.status(400);
    res.json({
      errors: [
        'Ha ocurrido un error, intenta nuevamente, a menos que seas un bot.',
      ],
    });
    return;
  }

  res.status(201);
  res.json({ message: 'Success!' });
};
