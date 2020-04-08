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
    resolve(fullMessage)
  })

  // res.send('Mensaje añadido')
  // response.success(req, res, 'Creado correctamente')
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

module.exports = {
  addMessage,
  getMessages,
}
