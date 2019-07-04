var express = require('express');
var router = express.Router();
//var giveDbLength = require("../controller/length-controller");
var question = require("../controller/question-controller");
var giveRanNum = require("../controller/number-controller");
//var ranNum;

/* GET users listing. */
router.get('/id/:num', function(req, res) {
  var idURL = req.params.num;
  let q = question(idURL)
    .then(q => {
      res.send(q['title']);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.get('/random', function(req, res){
  let d = giveRanNum()
      .then(d => {
        console.log("RanNum: " + d);
        let q = question(d)
          .then(q => {
          res.send(q/*['title'] 
          + "\nAntwort 1: " + q['a1'] 
          + "\nAntwort 2: " + q['a2']*/);
        })
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
});

module.exports = router;