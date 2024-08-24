const router = require('express').Router();
const { verifyAccessToken } = require('../middleWares/verifyToken');
const { Product, Cart } = require('../../db/models');

router.post('/add/', verifyAccessToken, async (req, res) => {

  try {
    // изменение записи Product (на фронте товаров с 0 отображаться не будут в будущих релизах)
    const { productId, userId } = req.query;
    const product = await Product.findByPk(Number(productId));
    product.number -= 1;
    await product.save();

    // изменение записи Cart
    const cart = await Cart.findOne({ where: { productId, userId } });
    if (cart) {
      cart.number += 1;
      await cart.save();
      res.status(200);
    } else {
      const createdCart = await Cart.create({ id: null, productId, userId, number: 1 }); // prettier-ignore
      console.log(createdCart);
      res.status(201);
    }

    res.json({number: product.number});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/add/test', async (req, res) => {
  try {
    const cart = await Cart.create({
      productId: 1,
      number: 1,
      userId: 1,
    });
    console.log(cart);
    res.send(cart);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post('/resend', (req,res) => {
  res.send(req.query)
})
module.exports = router;
