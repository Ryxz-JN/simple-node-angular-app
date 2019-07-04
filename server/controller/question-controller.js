var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function findQuestion(id) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("game");
      var convertedID = id.toString();
      var query = {num: convertedID}
      dbo.collection("questions").find(query).toArray(function(err, result) {
        if (err) reject(err);
        let q = result[0];
        //console.log(q);
        db.close();
        resolve(Object.assign({},result[0]));
      });
    });
  });
}

function findQuestion2(id) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("game");
    var query = {num: id}
    dbo.collection("questions").find(query, function(err, result) {
      console.log(result);
      if (err) throw err;
      return result[0];
      db.close();
    });
  });
}

module.exports = findQuestion;