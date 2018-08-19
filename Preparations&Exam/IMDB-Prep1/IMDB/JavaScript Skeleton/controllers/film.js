const Film = require('../models').Film;

module.exports = {
	index: (req, res) => {
        Film.findAll()
            .then(films => {
                res.render('film/index', { films });
            });
	},

	createGet: (req, res) => {
		res.render('film/create');
	},

	createPost: (req, res) => {
		let newFilm = req.body;
		 Film
			 .create(newFilm).then(
			res.redirect('/')
		)
	},

	editGet: (req, res) => {
        let id = req.params.id;
        Film
			.findById(id)
			.then(film => {
                res.render('film/edit', film.dataValues )
			}
		)
	},

	editPost: (req, res) => {
        let id = req.params.id;

        let filmUpdated = req.body;
		console.log(filmUpdated);
        Film
            .findById(id)
            .then(film => film
                .updateAttributes(filmUpdated)
                .then(() => res.redirect('/')));
	},

	deleteGet: (req, res) => {
        let id = req.params.id;

        Film
            .findById(id)
            .then(film => res.render('film/delete', film.dataValues));
	},

	deletePost: (req, res) => {
        let id = req.params.id;

        Film
            .findById(id)
            .then(film => film
                .destroy()
                .then(() => res.redirect('/')));
	}
};