const Article = require('../models').Article;

module.exports = {
    createGet: (req, res) => {
        res.render('article/create')
    },
    createPost: (req, res) => {
        let aricleArgs = req.body;
        let errorMsg = '';
        if(!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to make articles';
        } else if(!aricleArgs.title) {
            errorMsg = 'Invalid Title';
        } else if(!aricleArgs.content) {
            errorMsg = 'Invalid content';
        }
        if(errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }
        aricleArgs.authorId = req.user.id;

        Article.create(aricleArgs).then(article => {
            res.redirect('/');
        }).catch(err => {
            console.log(err.message);
            res.render('article/create', {error: err.message});
        });
    },
    details: (req, res) => {
        let id = req.params.id;
        Article.findById((id, {include: [
                {
                    model: User,
                }
            ]})).then(article => {
                res.render('article/details', article.dataValues)
        })
    }
};