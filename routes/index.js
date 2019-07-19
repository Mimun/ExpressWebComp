var express = require('express');
var router = express.Router();
var appConfig = require("../appConfig");


var footerData =  {
    "something": "lorem ispum sit amet",      
    "abcd": "something",    
  }


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
    appConfig:appConfig,
    footerData: footerData,
    footerView:appConfig.footer
    });
});

module.exports = router;
