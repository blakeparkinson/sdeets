var express = require('express');
var router = express.Router();
var cors = require('cors');
var email = require('./email');



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
        ios: '1.2.5',
        android: '1.2.4'
    }
    res.json({result: version});
})

router.get('/email', cors(), (req, res) => {

    email.send( (error) => {

        res.status( 403 ).json( error );

    },
    (response) => {
        res.status( 200 ).json( response );

    })
})
module.exports = router;
