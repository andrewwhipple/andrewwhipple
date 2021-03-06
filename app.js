
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

var index = require('./routes/index');
var writing = require('./routes/writing');
var music = require('./routes/music');
var games = require('./routes/games');
var websites = require('./routes/websites');
var youtube = require('./routes/youtube');
var contact = require('./routes/contact');
var resume = require('./routes/resume');
var technical = require('./routes/technical');
var acting = require('./routes/acting');
var thecat = require('./routes/thecat');
var spiral = require('./routes/spiral');
var font = require('./routes/font');
var portfolio = require('./routes/portfolio');
var podcasts = require('./routes/podcasts');
var redirect = require('./routes/redirect');
var agentx = require('./routes/agentx');
// Example route
// var user = require('./routes/user');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'andrewwhipple';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res) {
	res.status(400);
	res.render('404');
});
app.use(function(req,res) {
	res.status(500);
	res.render('500');
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/writing', writing.view);
app.get('/music', music.view);
app.get('/games', games.view);
app.get('/websites', websites.view);
app.get('/youtube', youtube.view);
app.get('/contact', contact.view);
app.get('/resume', resume.view);
app.get('/acting', acting.view);
app.get('/technical', technical.view);
app.get('/thecat', thecat.view);
app.get('/spiral', spiral.view);
//app.get('/font', font.view);
app.get('/portfolio', portfolio.view);
//app.get('/podcasts', podcasts.view);
//app.get('/podjack', podcasts.podjack);
//app.get('/adub', podcasts.adub);
app.get('/podcast', podcasts.profundity);
app.get('/profundity', redirect.profundity);
app.get('/font', redirect.fontWireframe);
app.get('/hover', redirect.hover);
app.get('/agentx', agentx.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
