const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', async (req, res) => {
  // res.header({
  //   'custom-header': 'Nuestro valor personalizado',
  // })
  // res.send(req.headers)
  // res.status(201).send({
  //     error: null,
  //     body: 'Creado correctamente'
  // })
  try {
    let messagesList = await controller.getMessages()
    response.success(req, res, messagesList, 201)
  } catch (error) {
    response.error(req, res, 'Error el servicio', 500, error)
  }

  // if (req.query.error == 'ok') {
  //   response.error(req, res, 'Error inesperado', 500, 'Error simulado')
  // } else {
  //   response.success(req, res, 'Lista de mensajes')
  // }
})

router.post('/', async (req, res) => {
  try {
    let fullMessage = await controller.addMessage(
      req.body.user,
      req.body.message
    )
    response.success(req, res, fullMessage, 201)
  } catch (error) {
    response.error(
      req,
      res,
      'Información no valida',
      400,
      'Error en el controlador'
    )
  }
})

module.exports = router
