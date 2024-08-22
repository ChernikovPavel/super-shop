const cookiesConfig = require('../configs/cookiesConfig')
const { verifyAccessToken } = require('../middleWares/verifyToken')
const generateToken = require('../utils/generateToken')

const router = require('express').Router()

router.get('/refresh', verifyAccessToken, (req,res)=>{
    try {
        const { user } = res.locals
        const {accessToken, refreshToken} = generateToken({user})
        res.cookie('refreshToken', refreshToken, cookiesConfig.refresh).json({user, accessToken})
    } catch (error) {
        console.log(error)
        res.status(203).json({message: 'у пользователя нет REFRESH токена'})
    }
})
module.exports = router