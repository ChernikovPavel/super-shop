const jwt = require('jsonwebtoken');

const verifyRefreshToken = (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
    res.locals.user = user;
    next();
  } catch (error) {
    console.log('Invalid REFRESH token');
    res.status(203).json({message: 'у пользователя нет REFRESH токена'})
  }
};

const verifyAccessToken = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;
    const { user } = jwt.verify(accessToken, process.env.SECRET_ACCESS_TOKEN);
    res.locals.user = user;
    next();
  } catch (error) {
    console.log('Invalid ACCESS token');
    res.status(203).json({message: 'у пользователя нет ACCESS токена'})
  }
};

module.exports = { verifyRefreshToken, verifyAccessToken };
