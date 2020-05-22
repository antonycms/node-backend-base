// eslint-disable-next-line no-unused-vars
const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('~root/app/models/management/User');

class SessionController {
  /**
  * @param {request} req; @param {response} res
  */
  async store(req, res) {
    // logic here
    const { password, login } = req.body;

    const user = await User.findOne({
      where: { login },
    });

    if (!user) {
      return res.status('404').json({ error: 'user not found' });
    }

    if (!user.checkPassword(password)) {
      return res.status(401).json({ error: 'invalid password' });
    }

    const { id, name } = user;

    const secretKey = process.env.SECRET_KEY;
    const expiration = process.env.TOKEN_EXPIRATION_TIME;

    const token = jwt.sign({
      id,
      name,
    }, secretKey, { expiresIn: expiration });

    return res.json({ token });
  }
}

module.exports = new SessionController();
