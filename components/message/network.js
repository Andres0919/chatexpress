const express = require('express')
const multer = require('multer')

const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

const upload = multer({
  dest: 'public/files/',
})

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
    const filterMessages = req.query.chat || null
    let messagesList = await controller.getMessages(filterMessages)
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

router.post('/', upload.single('file'), async (req, res) => {
  try {
    console.log(req.file)
    let fullMessage = await controller.addMessage(
      req.body.chat,
      req.body.user,
      req.body.message,
      req.file
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

router.patch('/:id', async (req, res) => {
  try {
    let data = await controller.updateMessage(req.params.id, req.body.message)
    response.success(req, res, data)
  } catch (error) {
    response.error(req, res, 'error interno', 500, error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    controller.deleteMessage(req.params.id)
    response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
  } catch (error) {
    response.error(req, res, 'error interno', 500, error)
  }
})

module.exports = router
