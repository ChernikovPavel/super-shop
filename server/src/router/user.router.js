const router = require('express').Router();
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const cookieConfig = require('../configs/cookiesConfig');

router.post('/reg', async (req, res) => {
  if (!(Boolean(req.body.login) & Boolean(req.body.password))) {
    res.status(418).json({ mesage: 'пустые поля', resived: req.body });
  } else {
    const { login, email = null, password } = req.body;
    try {
      console.log('получено с клиента: ', req.body);
      const [user, isCreated] = await User.findOrCreate({
        where: { [Op.or]: { /*email: email ,*/ login: login } },
        defaults: { login, email, password: await bcrypt.hash(password, 10) },
      });
      if (!isCreated && !req.body.debug) {
        res.status(418).send({ message: 'пользователь уже существует' });
      } else {
        const cleanUser = user.get();
        console.log('получено с бд: ', cleanUser);
        console.log('новая запись:', isCreated);
        delete cleanUser.password;

        const { accessToken, refreshToken } = generateToken({
          user: cleanUser,
        });
        console.log(refreshToken);
        res
          .cookie('refreshToken', refreshToken, cookieConfig.refresh)
          .json({ user: cleanUser, accessToken });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ user: {}, mesage: 'потом доделаю(никогда)', isError: true });
    }
  }
  res.end();
});

router.get('/all', async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(
      users.map((el) => {
        delete el.dataValues.password;
        console.log(el);
        return el;
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).send('бд упала');
  }
});

router.post('/log', async (req, res) => {
  let status = 500
  let message = 'бд упала'
  if (!(Boolean(req.body.login) & Boolean(req.body.password))) {
    res.status(418).json({ mesage: 'пустые поля', resived: req.body });
  } else {
    const { login, email, password } = req.body;

    try {
      console.log(req.body);
      const user = await User.findOne({
        where: { /*email: email,*/ login: login },
      });
      if (!user) {
        status = 404
        message = 'пользователь не найден'
        throw Error('оаоаоао')
      } else {
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
          res
          status = 400
          message = 'неправильный пароль'
          throw Error('оаоаоао')
        }
        const cleanUser = user.get();
        delete cleanUser.password;

        const { accessToken, refreshToken } = generateToken({
          user: cleanUser,
        });
        console.log(refreshToken);
        res
          .cookie('refreshToken', refreshToken, cookieConfig.refresh)
          .json({ user: cleanUser, accessToken });
      }
    } catch (error) {
      console.log(error);
      res.status(status).send({ user: {}, mesage: message, isError: true });
    }
  }
  res.end();
});

module.exports = router;
