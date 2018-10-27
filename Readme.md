# Google Translate API with Express
I'm trying to get some fun with Google Translate API. Here I am trying to create a simple Node.JS API microservice as a translator. With it main bussiness process is done by Google Translate API

Demo and tutorial [click here](https://cloud.google.com/translate/docs/quickstart-client-libraries?authuser=1)

## How to Use this API

1. Download npm package needed
   ```
   npm install
   ```
2. Set your Project ID at ```api/config.js.example``` and rename it to ```config.js```
2. Run the server
   ```
   npm run dev
   ```
3. Use Postman or other tool to use the API. Read ```API Contract.md``` for more API information.

## Function Reference

### Constructor

```javascript
// import
const {Translate} = require('@google-cloud/translate')

// set project Id
const translate = new Translate({
  projectId: 'PROJECT_ID'
})
```

### Translate

Option parameter

```javascript
var text = 'input text'
var options = {
  to: 'target language',
  from: 'source language',
  format: 'input format',
  model: 'translation model'
}
```

Using ```then``` to consume ```Promise```

```js
translate
  .translate(text, options)
  .then(results => {
    // do something
  })
  .catch(err => {
    // oops! got an error!
  })
```

Using ```callback``` function

```js
translate
  .translate(text, options, (err, translations, resp) => {
    // do something
  })
```

## About Google API

Don't forget to install google cloud SDK ([download link](https://cloud.google.com/sdk/docs/?authuser=1)) to make your life easier! 

With this SDK, you can manage your account and your projects. The easy one is to show temporary token (1 Hour expiration time) for using any API, just run this code:

```
gcloud auth application-default print-access-token
```

And then you can use any API Service provided in your GCP Project. In this case I'm using Google Translate API.

Run in postman:
* Method: POST
* Param: 
  * q: input text
  * source: source language
  * target: target language
* Authorization: OAuth 2.0
* Access Token: get from gcloud SDK cli

```
https://translation.googleapis.com/language/translate/v2?q=dasar kau jalang&target=en&source=id
```

And you'll get this response:

```json
{
    "data": {
        "translations": [
            {
                "translatedText": "Translated Text"
            }
        ]
    }
}
```

## More information

Just email me at bagusprabangkoro@yahoo.co.id or message at github.