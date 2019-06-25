# Node Quiz App
This is a simple project for a webserver weith nodejs and mongodb.

## Setup
1. Install [Nodejs](https://nodejs.org/en) <= 10 
2. Install [MongoDB](https://www.mongodb.com/download-center/community)

## Run
```
 cd server
 npm i
 npm start
 ```
 
 ## API
 To perform server requests an api is needed. Add a routing component to the routes nodule.
 
 ```javascript
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/question", (req, res) => {
  res.send('create resource here');
});

router.put("/question", (req, res) => {
  res.send('update resource here');
});

router.delete("/question", (req, res) => {
  res.send('remove resource here');
});

module.exports = router;
```

## Client
The client consumes the api from the server via http requests.

 ```javascript
function getQuestion(id) {
  $.get( `api/questions/${id}`, (data) => {
    alert("Question found!");
  });
}

```
