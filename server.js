const express = require('express')
const bodyParser = require('body-parser')

const router = require('./network/routes')

let app = express()

app.use(bodyParser.json())
// app.use(router)

router(app)

app.use('/app', express.static('public'))

app.listen(3000, () => {
  console.log('La app is running in localhost:3000')
})
