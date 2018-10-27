const {Translate} = require('@google-cloud/translate')
const {projectId} = require('./config')

var translate = new Translate({
  projectId: projectId
})

var translateText = ({inputText, targetLanguage, sourceLanguage}, callback) => {
  translate
    .translate(inputText, { to: targetLanguage, from: sourceLanguage}, 
        (err, translatedText) => {
      if(err) {
        console.log(`error translate text: ${err}`)
        return
      }
      console.log(`translateText => `)
      console.log(`source language: ${sourceLanguage}`)
      console.log(`target language: ${targetLanguage}`)
      console.log(`input text: ${inputText}`)
      console.log(`translated text: ${translatedText}`)
      callback(translatedText)
    })
}

var detectLanguage = (inputText, callback) => {
  translate
    .detect(inputText, 
      (err, result) => {
      if(err) {
        console.log(`error detect language: ${err}`)
        return
      }     
      console.log(`detectLanguage => `)
      console.log(`detected language: ${result.language}`)
      callback(result.language)
    })
}

// detectLanguage -> translateText
var autoTranslateText = ({inputText, targetLanguage}, callback) => {
  detectLanguage(inputText, (sourceLanguage) => {
    translateText({inputText, targetLanguage, sourceLanguage}, callback)
  })
}

module.exports = {
  translateText,
  detectLanguage,
  autoTranslateText
}