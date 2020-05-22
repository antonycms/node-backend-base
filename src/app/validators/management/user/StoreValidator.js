const Yup = require('yup');

module.exports = async (req, res, next) => {
  const data = req.body;

  try {
    const schema = Yup.object().shape({
      login: Yup.string().required(),
      name: Yup.string().required(),
      password: Yup.string().required().min(6),
    });

    await schema.validate(data, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: err.inner });
  }
};
