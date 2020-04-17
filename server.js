const express = require('express')
let app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db(
  'mongodb+srv://db_user_platzichat:VmJftrAnfqIBc7YM@cluster0-baqm9.mongodb.net/platzicaht?retryWrites=true&w=majority'
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(3000, () => {
  console.log('La app is running in localhost:3000')
})
