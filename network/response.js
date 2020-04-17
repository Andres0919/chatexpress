const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal error',
}

exports.success = (req, res, message, status = 200) => {
  let statusMessage = message
  if (!message) statusMessage = statusMessages[status]

  res.status(status).send({
    error: null,
    body: statusMessage,
  })
}

exports.error = (req, res, message, status = 500, detail) => {
  let statusMessage = message
  if (!message) statusMessage = statusMessages[status]
  console.error('[response error]', detail)

  res.status(status).send({
    error: statusMessage,
    body: null,
  })
}
