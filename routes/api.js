var express = require('express');
var router = express.Router();
var Bill = require('../models/Bill');
var Legislator = require('../models/Legislator');
var BillComment = require('../models/BillComment');
var LegislatorFollow = require('../models/LegislatorFollow')
var BillFollow = require('../models/BillFollow');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bills', function (req, res) {

  Bill.find({}, function(err, docs){
    docs.count = 55;
    res.send(docs);
  });
});

router.get('/bill/:name', function (req, res) {

  Bill.find({billName: req.params.name}, function(err, docs){
    //docs.count = 55;
    res.send(docs);
  });
});

router.get('/billComments/:billName', function (req, res) {
  BillComment.find({billName: req.params.billName}, function(err, docs){
    //docs.count = 55;
    res.send(docs);
  });
});

router.post('/billComment', function (req, res) {
  var newBillComment = new BillComment(req.body);
  newBillComment.save();
  console.log(req.body);
  res.send(req.body);
})

router.post('/followLegislator', function (req, res) {
  var newLegislatorFollow = new LegislatorFollow(req.body);
  newLegislatorFollow.save();
  console.log(res.body);
})

router.post('/followBill', function(req, res){
  var newBillFollow = new BillFollow(req.body);
  newBillFollow.save();
  console.log(req.body);
  res.send(req.body);
})

router.get('/followedBills/:name', function(req,res){
  BillFollow.find({user: req.params.name}, function(err, docs){
    res.send(docs);
  });
})

router.get('/housebillsinsenate', function (req, res) {

  Bill.find({originChamber: 'house', currentChamber: 'senate'}, function(err, docs){
    //docs.count = 55;
    res.send({ count: docs.length, bills: docs });
  });
});


router.get('/bills/:currentChamber', function (req, res) {

  Bill.find({'currentChamber': req.params.currentChamber}, function(err, docs){
    res.send(docs);
  });
});

/* BILL, CRES (Committee Resolution,
*/

/* possible motions DISSENT, CONCURRENCE), CR (Committee Report) */
router.get('/bills/:currentChamber/:type', function (req, res) {

  Bill.find({'currentChamber': req.params.currentChamber, 'type': req.params.type}, function(err, docs){
    res.send(docs);
  });
});


router.get('/bills-motions/:currentChamber/', function (req, res) {
console.log('Special');

  Bill.find({'currentChamber': req.params.currentChamber, $where: "this.motions.length > 0"}, function(err, docs){
    res.send(docs);
  });
});


/*

  This route will return a list of bills that are considered bipartisan
  This is defined as bills with both Democratic and Republcan (co)authors, (co)sponsors, and advisors
*/
router.get('/bipartisanbills/:currentChamber/', function (req, res) {
console.log('Special');

//Bill.find({'currentChamber': req.params.currentChamber}, { $and: [{'authors.party': 'Republican', 'authors.party':'Democratic']} }, function(err, docs){
  Bill.find( { $and: [ {'authors.party': 'Republican'}, {'authors.party':'Democratic'}],
  $and: [ {'coauthors.party': 'Republican'}, {'coauthors.party':'Democratic'}]
  ,$and: [ {'sponsors.party': 'Republican'}, {'sponsors.party':'Democratic'}]
  ,$and: [ {'cosponsors.party': 'Republican'}, {'cosponsors.party':'Democratic'}]
  //,$or: [ {'advisors.party': 'Republican'}, {'advisors.party':'Democratic'}]

}, function(err, docs){
    res.send(docs);
    console.log(docs.length);
  });
});

router.get('/legislators', function (req, res) {

  Legislator.find({}, function(err, docs){
    res.send(docs);
  });
});

router.get('/legislators/:chamber', function (req, res) {

  Legislator.find({'chamber.name': req.params.chamber}, function(err, docs){
    res.send(docs);
  });
});

router.get('/legislators/:chamber/:party', function (req, res) {

  Legislator.find({'chamber.name': req.params.chamber, party: req.params.party}, function(err, docs){
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


router.post('/legislator', function (req, res) {

  var newLegislator = new Legislator(req.body);

  //newBill.billName = req.body.billName;

  newLegislator.save();

  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
