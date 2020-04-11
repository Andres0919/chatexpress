const Model = require('./model')

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
