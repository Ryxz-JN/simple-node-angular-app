var question = require("../controller/question-controller");
var giveRanNum = require("../controller/number-controller");

      function printQuestion(id) {
        return new Promise((resolve, reject) => {
            let d = giveRanNum()
            .then(d => {
              console.log("RanNum: " + d);
              let q = question(d)
                .then(q => {
                    resolve(Object.assign({},q));
              })
                .catch(err => {
                  console.log(err);
                  res.status(500).send(err);
                  reject("Frage wurde nicht gefunden!");
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).send(err);
            });
        });
      }

module.exports = printQuestion;