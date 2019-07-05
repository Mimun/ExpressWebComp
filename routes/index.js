var express = require('express');
var router = express.Router();
var appConfig = require("../appConfig");

// For mock object design only
var footerData = [
  {
    "dat_id": "something",
    "content": "lorem ispum sit amet"
  },
  {
    "dat_id": "abcd",
    "content": "there are something"
  },

]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
    appConfig:appConfig,
    footerData: footerData,
    footerView:appConfig.footer
    });
});

module.exports = router;
