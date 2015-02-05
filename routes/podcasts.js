
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	/*models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('index', { 'projects': projects });
	}*/
	res.render('podcasts');

};

exports.podjack = function(req, res) {
	models.Podcast
		.find({"podcast": "Podjack Horsecast"})
		.sort("date")
	.exec(renderPodcasts);
	
	function renderPodcasts(err, episodes) {
		res.render('podEps', { 'episodes': episodes, 'podcast': 'Podjack Horsecast' });
	}
}

exports.adub = function(req, res) {
	models.Podcast
		.find({"podcast": "The A-Dub Club"})
		.sort("date")
	.exec(renderPodcasts);
	
	function renderPodcasts(err, episodes) {
		res.render('podEps', { 'episodes': episodes, 'podcast': 'The A-Dub Club' });
	}
}

exports.profundity = function(req, res) {
	models.Podcast
		.find({"podcast": "proFUNdity!"})
		.sort("date")
	.exec(renderStatic);
	
	function renderStatic(err, episodes) {
		res.render('profundity');
	}
	function renderPodcasts(err, episodes) {
		res.render('podEps', { 'episodes': episodes, 'podcast': 'proFUNdity!' });
	}
}