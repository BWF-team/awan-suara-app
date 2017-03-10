const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()
const apis = require('./routes/apis')
const index = require('./routes')
const lists = require('./routes/list-antrians')

mongoose.connect('mongodb://localhost/antrian')
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

require('./config/passport')(passport)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)

app.use('/api', lists)

app.listen(3000)

module.exports = app
