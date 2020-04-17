const mongoose = require('mongoose')

const Schema = mongoose.Schema

const message = new Schema({
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'chat',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
})

const model = mongoose.model('messages', message)

module.exports = model
