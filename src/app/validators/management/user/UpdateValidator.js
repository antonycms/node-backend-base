const Yup = require('yup');

module.exports = async (req, res, next) => {
  const data = req.body;

  try {
    const schema = Yup.object().shape({
      id: Yup.number().integer().required(),
      login: Yup.string(),
      name: Yup.string(),
      password: Yup.string().min(6),
    });

    await schema.validate(data, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: err.inner });
  }
};
