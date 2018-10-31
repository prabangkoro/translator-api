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
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    next()
  })
  // disable
  app.disable("x-powered-by")
}

function activateAPI() {
  api.startTranslator()
  api.startAutoTranslator()
  api.startLanguageDetector()
  api.startLanguageSupportGetter()
}

module.exports = {
  fireServer
}
