const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    let users = await controller.getUsers()
    response.success(req, res, users, 200)
  } catch (error) {
    response.error(req, res, 'Internal error', 500, error)
  }
})

router.post('/', async (req, res) => {
  try {
    let data = await controller.addUser(req.body.name)
    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, 'Internal error', 500, error)
  }
})

module.exports = router
