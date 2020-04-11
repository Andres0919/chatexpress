const db = require('mongoose')

db.Promise = global.Promise

//'mongodb+srv://db_user_platzichat:VmJftrAnfqIBc7YM@cluster0-baqm9.mongodb.net/platzicaht?retryWrites=true&w=majority'
async function connect(url) {
  //mongodb+srv://db_user_platzichat:VmJftrAnfqIBc7YM@cluster0-baqm9.mongodb.net/platzicaht
  await db.connect(url, {
    useNewUrlParser: true,
  })
  console.log('[db] Conectada con exito')
}

module.exports = connect
