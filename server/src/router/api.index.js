const router = require('express').Router()
const productR = require('./product.router')
const userR = require('./user.router.js')
const tokenR = require('./token.router.js')
router.use('/products', productR)
router.use('/users', userR)
router.use('/token', tokenR)
module.exports = router