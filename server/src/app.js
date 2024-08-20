const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get('/api', (req,res) => res.send('server is OK'))
module.exports = app;