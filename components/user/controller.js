const store = require('./store')

async function getUsers() {
  return new Promise(async (resolve, reject) => {
    let users = await store.list()
    resolve(users)
  })
}

async function addUser(name) {
  if (!name) return Promise.reject('no name')

  const user = {
    name,
  }

  return await store.add(user)
}

module.exports = {
  addUser,
  getUsers,
}
