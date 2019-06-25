# Node Quiz App
This is a simple project for a webserver weith nodejs and mongodb.

## Setup
1. Install [Nodejs](https://nodejs.org/en) <= 10 
2. Install [MongoDB](https://www.mongodb.com/download-center/community)

### Recommended tools
* Lightweight code editor [VScode](https://code.visualstudio.com)
* API Test with [Postman](https://www.getpostman.com/downloads)

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

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/questions/:id', function(req, res) {
  res.send("question id is" + req.params.id);
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


## Backend
To interface with the database a driver is required:
```
 cd server
 npm i -s mongodb
 ```
 
 Then you can perform atomic operations with the database server. Make shure the server is running.
 
 ```javascript
 const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const db = 'pdv-quiz';

// Connect
MongoClient.connect(url, function(err, client) {
  // Use the admin database for the operation
  let quizDb = client.db(db);
  
  // List all questions
  quizDb.questions.find((err, data) => {
    console.log("questions found");
    quizDb.close();
  });
});
```
Use the [Documentation](https://mongodb.github.io/node-mongodb-native/3.2/api) to learn more.
