const Model = require('./model')

function addMessage(message) {
  // list.push(message)
  const myMessage = new Model(message)
  myMessage.save()
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterChat !== null) filter = { chat: filterChat }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error)
          return false
        }
        resolve(populated)
      })
  })

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
