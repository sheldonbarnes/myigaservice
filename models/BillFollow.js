var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillFollow = new Schema (
{
  user: String,
  billName: String
  }
);

module.exports = mongoose.model('BillFollow', BillFollow);
