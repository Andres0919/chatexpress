const store = require('./store')

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje')
      reject('Los datos no están correctores')
      return false
    }

    const fullMessage = {
      user,
      message,
      date: new Date(),
    }

    console.log('fullMessage :', fullMessage)
    store.add(fullMessage)
    console.log('ee')
    resolve(fullMessage)
  })

  // res.send('Mensaje añadido')
  // response.success(req, res, 'Creado correctamente')
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('no data')
      return false
    }

    let result = await store.updateText(id, message)
    resolve(result)
  })
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        reject('Id required')
        return false
      }
      await store.remove(id)
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}
