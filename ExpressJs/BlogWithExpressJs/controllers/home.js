const Article = require('../models/index').Article;
const User = require('../models/index').User;

module.exports = {
    index: (req, res) => {
        Article.findAll({ limit: 6, include: [{
            model: User
            }]}).then(articles => {
           res.render('home/index', { articles })
        });
        res.render('home/index');
    }
};



