const config = require('./config')
const express = require('express')
const app = module.exports = express()
const port = config.port
const api = require('./api')

function fireServer () {
  startServer()
  setRule()
  activateAPI()
}

function startServer() {
  // start server
  let server = app.listen(port, () => {
    let serverUrl = server.address().address
    let serverPort = server.address().port
    console.log(`listening at: http://${serverUrl}:${serverPort}`)
  })
}

function setRule() {
  // middleware
  app.use(function (req, res, next) {
    res.type('application/json')
    next()
  })
  // disable
  app.disable("x-powered-by")
}

function activateAPI() {
  api.startTranslator()
  api.startAutoTranslator()
  api.startLanguageDetector()
}

module.exports = {
  fireServer
}
