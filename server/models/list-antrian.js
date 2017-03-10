'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaList = Schema({
  'id' : String,
  'name' : String,
  'date_assign': Date
})

let lists = Mongoose.model('lists', schemaList)

module.exports = lists
