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

async function getMessages(filterUser) {
  // return list
  let filter = {}
  if (filterUser !== null) filter = { user: filterUser }
  let messages = await Model.find(filter)

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

async function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  })
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText,
  remove: removeMessage,
  //get
  //update
  //delete
}
