require('dotenv').config()

module.exports = {
    origin: [ 
        'http://localhost:5173',
        'http://127.0.0.1.5173',
        process.env.CORS_LOCALIP + ':' + process.env.CORS_PORT,
      ],
      credentials: true
}