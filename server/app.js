const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
<<<<<<< HEAD
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const apis = require('./routes/apis');
const index = require('./routes');

var mongoose = require('mongoose')
require('dotenv').config();
const app = express()
const lists = require('./routes/list-antrians');



mongoose.connect('mongodb://localhost:27017/antrian');
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', lists)


app.listen(3000)

module.exports = app
