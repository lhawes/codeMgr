var express = require('express');
var router = express.Router();

var info = {
  title: 'react',
  testObj: JSON.stringify({prop: 'test', num: 12})
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('react', info);
});

module.exports = router;
