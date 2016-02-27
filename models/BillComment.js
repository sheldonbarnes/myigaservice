var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillComment = new Schema (
{
  user: String,
  billName: String,
  comment: String
  }
);

module.exports = mongoose.model('BillComment', BillComment);
