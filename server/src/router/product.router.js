const { Product } = require('../../db/models');

const router = require('express').Router();

router.get('/all', async (req, res) => {
  try {
    const dirtyProducts = await Product.findAll();
    res.send(dirtyProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'endpoint in GET products' });
  }
});
module.exports = router