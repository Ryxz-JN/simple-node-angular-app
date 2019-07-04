var giveDbLength = require('./length-controller');

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

function giveRanNum() {
    return new Promise((resolve, reject) => {
        var ranNum = 0;
        let d = giveDbLength()
            .then(d => {
                ranNum = randomInt(0, d);
                console.log("Datenbankgröße: " + d)
                console.log("RandomNummer: " + ranNum);
                resolve(ranNum);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
                reject("Doesn't find Ran Num!");
            });
    });
  }
module.exports = giveRanNum;