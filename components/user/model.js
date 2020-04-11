const mongoose = require('mongoose')

const Schema = mongoose.Schema

const user = new Schema({
  name: String,
})

const model = mongoose.model('user', user)

module.exports = model
