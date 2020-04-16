const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    let data = await controller.addChat(req.body.users)
    response.success(req, res, data, 201)
  } catch (error) {
    response.error(req, res, 'Información no valida', 400, error)
  }
})

router.get('/:userId', async (req, res) => {
  try {
    let data = await controller.listChats(req.params.userId)
    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, 'error interno', 500, error)
  }
})

module.exports = router
