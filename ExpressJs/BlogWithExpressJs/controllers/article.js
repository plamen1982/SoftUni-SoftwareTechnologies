const Article = require('../models').Article;
const User = require('../models').User;
const Comment = require('../models').Comment;

module.exports = {
    createGet: (req, res) => {
        res.render('article/create')
    },
    createPost: (req, res) => {
        let aricleArgs = req.body;
        console.log(`Article args`);

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

    createPut: (req, res) => {
        let aricleArgs = req.body;
        let errorMsg = '';
        if(!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to edit articles';
        } else if(!aricleArgs.title) {
            errorMsg = 'Invalid Title';
        } else if(!aricleArgs.content) {
            errorMsg = 'Invalid content';
        }
        if(errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }
        articleArgs.authorId = req.user.id;

        Article.update(articleArgs).then(article => {
            res.redirect('/');
        }).catch(err => {
            console.log(err.message);
            res.render('article/create', {error: err.message});
        });
    },

    createDelete: (req, res) => {

    },

    details: (req, res) => {
        let id = req.params.id;
        let array = [];
        let comments = {title: 'My title', fullName: 'My name', content: 'My content'};
        // Comment.findAll().then(comments =>  comments = comments.dataValues);
        Article.findById(id, {include: [
                {
                    model: User,
                }
            ]}).then(article => {
                res.render('article/details', article.dataValues)
        })
    }
};