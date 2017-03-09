const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
require('dotenv').config();
const app = express()
// const apis = require('./routes/apis');

app.use(passport.initialize())
app.use(passport.session())

// require('./config/passport')(passport)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', apis)

app.listen(3000)

module.exports = app
