const xNotPowored = (req, res, next) => {
  res.removeHeader('X-Powered-By');
  console.log('deleted xpoweredby')
  next();
};
module.exports = xNotPowored