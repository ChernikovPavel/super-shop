const router = require('express').Router();
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const cookieConfig = require('../configs/cookiesConfig');

router.post('/reg', async (req, res) => {
  // защита от пустых полей, от которых валятся бд (потом эта проверка перенесётся на фронт(нет))
  if (!(Boolean(req.body.login) & Boolean(req.body.password))) {
    res.status(418).json({ mesage: 'пустые поля', resived: req.body });
  } else {
    const { login, email = null, password } = req.body;
    try {
      const [user, isCreated] = await User.findOrCreate({
        // кажется, какой-то американский шпион устроил диверсию и выключил проверку на емаил...
        where: { [Op.or]: { /*email: email ,*/ login: login } },
        defaults: { login, email, password: await bcrypt.hash(password, 10) },
      });
      if (!isCreated && !req.body.debug) {
        res.status(409).send({ message: 'пользователь уже существует' });
      } else {
        // нарезка пароля
        const cleanUser = user.get();
        delete cleanUser.password;
        const { accessToken, refreshToken } = generateToken({
          user: cleanUser, //! почему тут пользователь без пароля?
        });
        // мистер рефреш токен в куки, мистер аксцес токен в джсон
        res
          .cookie('refreshToken', refreshToken, cookieConfig.refresh)
          .json({ user: cleanUser, accessToken });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ user: {}, mesage: 'ты как бд повалил?' });
    }
  }
  res.end();
});

//для админки, которая будет(нет)
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
  let status = 500;
  let message = 'бд упала';
  // защита от пустых полей, от которых валятся бд (потом эта проверка перенесётся на фронт(нет))
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
        status = 404;
        message = 'пользователь не найден';
        throw Error('все нормально, ' + message);
      } else {
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
          res;
          status = 400;
          message = 'неправильный пароль';
          throw Error('все нормально, ' + message);
        }
        const cleanUser = user.get();
        delete cleanUser.password;
        // генерирация токенов
        const { accessToken, refreshToken } = generateToken({
          user: cleanUser,
        });
        // мистер рефреш токен в куки, мистер аксцес токен в джсон
        console.log(refreshToken);
        res
          .cookie('refreshToken', refreshToken, cookieConfig.refresh)
          .json({ user: user.get(), accessToken });
      }
    } catch (error) {
      console.log(error);
      res.status(status).send({ user: {}, mesage: message, isError: true });
    }
  }
  res.end();
});

router.get('/logout', (req, res) => {
  try {
    res.clearCookie('refreshToken').sendStatus(200);
  } catch (error) {
    res.status(500).send(':O');
  }
});
module.exports = router;
