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