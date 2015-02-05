
var models = require('../models');

/*
 * GET home page.
 */

exports.hover = function(req, res){

	/*models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('index', { 'projects': projects });
	}*/
	res.redirect("https://hover.com/MFb9tcQd");

};

exports.fontWireframe = function(req, res){

	/*models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('index', { 'projects': projects });
	}*/
	res.redirect('https://projects.invisionapp.com/share/EC20Y5GFR#/screens');
	

};

exports.profundity = function(req, res) {

	res.redirect('https://itunes.apple.com/us/podcast/profun!dity-podcast/id964000881?mt=2');
};