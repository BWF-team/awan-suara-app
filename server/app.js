const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const apis = require('./routes/apis');
const index = require('./routes');


mongoose.connect('mongodb://localhost:27017/antrian');
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apis)
app.use('/', index)

app.listen(3000)

module.exports = app
