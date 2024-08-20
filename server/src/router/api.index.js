const router = require('express').Router()
const { RuleTester } = require('eslint')
const productR = require('./product.router')
router.use('/products', productR)
module.exports = router