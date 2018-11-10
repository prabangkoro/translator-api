# API Cntract

## Ground Rules

* Format: JSON
* Port: 3000
* localhost url: http://localhost:3000

## Translate with Source + Target

### Request
* method: POST
* endpoint: ```/translate```
* parameters (query string):
  * q : input text
  * s : source
  * t : target

### Response
```json
{
  "status": "OK/FAILED",
  "data": {
    "translatedText": "Translated Text Here..."
  }
}
```

## Autotranslate with Target

### Request
* method: POST
* endpoint: ```/auto-translate```
* parameters (query string):
  * q : input text
  * t : target

### Response
```json
{
  "status": "OK/FAILED",
  "data": {
    "translatedText": "Translated Text Here..."
  }
}
```

## Detect Language

### Request
* method: POST
* endpoint: ```/detect-language```
* parameters (query string):
  * q : input text

### Response
```json
{
  "status": "OK/FAILED",
  "data": {
    "detectedLanguage": "Detected Language Here..."
  }
}
```

## Language Support

### Request
* method: POST
* endpoint: ```/language-support```
* parameters (query string):
  * q : source language code, reference: [link](https://ctrlq.org/code/19899-google-translate-languages)

### Response
```json
{
  "status": "OK/FAILED",
  "data": {
    "supportedLanguage": [
      {
        "code": "id",
        "name": "Indonesia"
      },
      ....
    ]
  }
}
```