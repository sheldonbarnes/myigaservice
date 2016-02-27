var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LegislatorFollow = new Schema (
{
  user: String,
  legislatorID: String
  }
);

module.exports = mongoose.model('LegislatorFollow', LegislatorFollow);
