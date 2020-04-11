const db = require('mongoose')
const Model = require('./model')

//mongodb+srv://db_user_platzichat:VmJftrAnfqIBc7YM@cluster0-baqm9.mongodb.net/platzicaht
db.Promise = global.Promise
db.connect(
  'mongodb+srv://db_user_platzichat:VmJftrAnfqIBc7YM@cluster0-baqm9.mongodb.net/platzicaht?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
)

console.log('[db] Conectada con exito')

function addMessage(message) {
  // list.push(message)
  console.log(':)')
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage() {
  // return list
  let messages = await Model.find()

  return messages
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  })
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText,
  //get
  //update
  //delete
}
