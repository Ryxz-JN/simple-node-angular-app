var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let msg = {
    name: 'pdv quiz server',
    version: '1.0.0',
    status: 'healthy'
  };
  res.send(msg);
});

module.exports = router;
