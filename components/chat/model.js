const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chat = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
})

const model = mongoose.model('chat', chat)

module.exports = model
