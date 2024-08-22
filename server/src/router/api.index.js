const router = require('express').Router()
const productR = require('./product.router')
const userR = require('./user.router.js')
router.use('/products', productR)
router.use('/users', userR)
module.exports = router