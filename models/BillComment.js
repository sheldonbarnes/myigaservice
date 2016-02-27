var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema (
{
  user: String,
  billName: String,
  comment: String
  }
);

module.exports = mongoose.model('Comment', Comment);
