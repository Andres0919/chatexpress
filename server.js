const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

const router = require('./network/routes')

db(
  'mongodb+srv://db_user_platzichat:VmJftrAnfqIBc7YM@cluster0-baqm9.mongodb.net/platzicaht?retryWrites=true&w=majority'
)

let app = express()

app.use(bodyParser.json())
// app.use(router)

router(app)

app.use('/app', express.static('public'))

app.listen(3000, () => {
  console.log('La app is running in localhost:3000')
})
