const app = require('./server')
const translator = require('./translator')

const endpoints = {
  translate: '/translate',
  autoTranslate: '/auto-translate',
  detectLanguage: '/detect-language'
}
const responseStatus = {
  success: 'OK',
  fail: 'FAILED'
}

// translator API Gateway
function startTranslator() {
  // API DOC
  app.get(endpoints.translate, (req, res) => {
    let response = {
      status: responseStatus.success,
      data: {
        method: "POST",
        endpoint: "/translate",
        queries: [
          { q: "input text" },
          { s: "source language, see https://ctrlq.org/code/19899-google-translate-languages" },
          { t: "target language, see https://ctrlq.org/code/19899-google-translate-languages" }
        ]
      }
    }
    res.json(response)
  })
  // TRANSLATE THIS SHIT
  app.post(endpoints.translate, (req, res) => {
    translator.translateText({
      inputText: req.query.q,
      targetLanguage: req.query.t,
      sourceLanguage: req.query.s},
      (translatedText) => {
        let response = {
          status: responseStatus.success,
          data: {
            translatedText: translatedText
          }
        }
        res.json(response)
      }
    )
  }) 
}

// auto-translator API Gateway
function startAutoTranslator() {
  // API DOC
  app.get(endpoints.autoTranslate, (req, res) => {
    let response = {
      status: responseStatus.success,
      data: {
        method: "POST",
        endpoint: "/auto-translate",
        queries: [
          { q: "input text" },
          { t: "target language, see https://ctrlq.org/code/19899-google-translate-languages" }
        ]
      }
    }
    res.json(response)
  })
  // AUTO TRANSLATE THIS SHIT
  app.post(endpoints.autoTranslate, (req, res) => {
    translator.autoTranslateText({
      inputText: req.query.q,
      targetLanguage: req.query.t},
      (translatedText) => {
        let response = {
          status: responseStatus.success,
          data: {
            translatedText: translatedText
          }
        }
        res.json(response)
      }
    )
  }) 
}

// detect language API Gateway
function startLanguageDetector() {
  // API DOC
  app.get(endpoints.detectLanguage, (req, res) => {
    let response = {
      status: responseStatus.success,
      data: {
        method: "POST",
        endpoint: " /detect-language",
        queries: [
          { q: "input text" }
        ]
      }
    }
    res.json(response)
  })
  // DETECT THIS SHIT
  app.post(endpoints.detectLanguage, (req, res) => {
    translator.detectLanguage(req.query.q, (detectedLanguage) => {
        let response = {
          status: responseStatus.success,
          data: {
            detectedLanguage: detectedLanguage
          }
        }
        res.json(response)
      }
    )
  }) 
}

module.exports = {
  startTranslator,
  startAutoTranslator,
  startLanguageDetector
}