const Model = require('./model')

async function allUsers() {
  return await Model.find()
}

async function addUser(user) {
  const myUser = new Model(user)

  return await myUser.save()
}

module.exports = {
  list: allUsers,
  add: addUser,
}
