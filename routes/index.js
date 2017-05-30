var express = require('express');
var router = express.Router();
var cors = require('cors');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/androidlink', cors(), (req, res) => {
    var androidLinks = ['asbury.dpsk12.org'];
    res.json({result: androidLinks});
})

router.get('/appversion', cors(), (req, res) => {
    var version = {
        ios: '1.1.1',
        androind: '1.2.4'
    }
    res.json({result: version});
})

module.exports = router;
