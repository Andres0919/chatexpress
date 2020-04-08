exports.success = (req, res, message, status = 200) => {
  res.status(status).send({
    error: null,
    body: message,
  })
}

exports.error = (req, res, message, status = 500, detail) => {
  console.error('[response error]', detail)

  res.status(status).send({
    error: message,
    body: null,
  })
}
