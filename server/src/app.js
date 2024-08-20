const express = require('express');
const morgan = require('morgan');
const app = express();
const mainRouter = require('./router/api.index')

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/api', mainRouter)

app.get('/api', (req,res) => res.send('server is OK'))
module.exports = app;