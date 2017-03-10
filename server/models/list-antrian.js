'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaList = Schema({
  'name': String,
  'date_assign': String,
  'status': Boolean
})

let lists = Mongoose.model('lists', schemaList)

module.exports = lists
