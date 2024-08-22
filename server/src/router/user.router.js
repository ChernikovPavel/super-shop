const router = require('express').Router();
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const cookieConfig = require('../configs/cookiesConfig');

router.get('/all', async (req, res) => {
  const users = await User.findAll();
  res.send(
    users.map((el) => {
      delete el.dataValues.password;
      console.log(el);
      return el;
    })
  );
});

router.post('/reg', async (req, res) => {
  if (!req.body) {
    res.status(400).json({ mesage: 'пустые поля' });
  } else {
    const { login, email, password } = req.body;
    try {
      const [user, isCreated] = await User.findOrCreate({
        where: { [Op.or]: { email: email, login: login } },
        defaults: { login, email, password: await bcrypt.hash(password, 10) },
      });
      if (!isCreated && !req.body.debug) {
        res.status(418).send({ message: 'пользователь уже существует' });
      } else {
        const cleanUser = user.get();
        delete cleanUser.password;

        const { accessToken, refreshToken } = generateToken(cleanUser);
        console.log(refreshToken)
        res
        //   .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .cookie('title', 'text', cookieConfig.refresh)
          .json({ user: cleanUser, accessToken });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  res.end()
});

router.get('/cookie', (req,res)=> {

    res.json({cookies: req.cookies})  
})
module.exports = router;
