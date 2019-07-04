
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function giveDbLength() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("game");
        dbo.collection("questions").countDocuments({}, function(err, numOfDocs) {
          if (err) reject(err);
          let q = numOfDocs;
          db.close();
          resolve(numOfDocs);
        });
      });
    });
}

function giveDbLength2(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("games");
        dbo.collection("questions").countDocuments({}, function(err, numOfDocs) {
          if (err) throw err;
          console.log('I have '+numOfDocs+' documents in my collection');
          db.close();
          return numOfDocs;
        });
      });
}

  module.exports = giveDbLength;

