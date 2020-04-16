const store = require('./store')

async function addChat(users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Invali user list')
  }
  const chat = {
    users,
  }
  return store.add(chat)
}

function listChats(userId) {
  return store.list(userId)
}

module.exports = {
  addChat,
  listChats,
}
