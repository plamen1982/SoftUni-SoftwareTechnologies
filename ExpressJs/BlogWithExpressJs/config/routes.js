const userController = require('../controllers/index').user;
const homeController = require('../controllers/index').home;
const articleController = require('../controllers/index').article;

module.exports = (app) =>{
    app.get('/',homeController.index);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);
    app.get('/user/login',userController.loginGet);
    app.post('/user/login',userController.loginPost);

    app.get('/user/logout',userController.logout);

    app.get('/article/create', articleController.createGet);
    app.post('/article/create', articleController.createPost);

    app.get('/article/details/:id', articleController.details);
};
