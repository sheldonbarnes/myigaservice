var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Legislator = new Schema (
{
  position_title: String,
  firstName: String,
  lastName: String,
  party: String,
  link: String,
  fullname: String,
  chamber: mongoose.Schema.Types.Mixed,
  pngDownloadLink: String
  /*
  title: String,
  billName: String,
  number: Number,
  description: String,
  status: String,
  stage: String,
  year: String,
  originChamber: String,
  currentChamber: String,
  type: String,
  authors: [mongoose.Schema.Types.Mixed],
  coauthors: [mongoose.Schema.Types.Mixed],
  sponsors: [mongoose.Schema.Types.Mixed],
  cosponsors: [mongoose.Schema.Types.Mixed],
  advisors: [mongoose.Schema.Types.Mixed],
  motions: [mongoose.Schema.Types.Mixed],
  latestVersion: mongoose.Schema.Types.Mixed,
  actions: mongoose.Schema.Types.Mixed,
  revno: mongoose.Schema.Types.Mixed,
  versions: mongoose.Schema.Types.Mixed,
  link: String,
  committeeStatus: String*/
  }
);


module.exports = mongoose.model('Legislator', Legislator);
