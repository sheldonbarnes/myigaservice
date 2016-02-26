var express = require('express');
var router = express.Router();
var Bill = require('../models/Bill');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bills', function (req, res) {

  Bill.find({}, function(err, docs){
    res.send(docs);
  });


});

router.post('/bill', function (req, res) {

  var newBill = new Bill(req.body);

  //newBill.billName = req.body.billName;

  newBill.save();

  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
