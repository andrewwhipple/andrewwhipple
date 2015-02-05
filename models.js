
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": String,
  "date": Date,
  "summary": String,
  "image": String
  
});

var PodcastSchema = new Mongoose.Schema({
	"podcast": String,
	"episodeTitle": String,
	"date": Date,
	"image": String,
	"description": String,
	"audio": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);
exports.Podcast = Mongoose.model('Podcast', PodcastSchema);


