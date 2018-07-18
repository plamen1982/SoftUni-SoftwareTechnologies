const userController = require('../controllers/index').user;
const homeController = require('../controllers/index').home;
const articleController = require('../controllers/index').article;
const commentController = require('../controllers/index').comment;

module.exports = (app) =>{

    app.get('/',homeController.index);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);
    app.get('/user/login',userController.loginGet);
    app.post('/user/login',userController.loginPost);
    app.post('/user/delete-user/:id', userController.deleteUser);
    app.get('/user/admin-panel', userController.getAllUsers);
    app.get('/user/details/:id', userController.details);
    app.get('/user/logout',userController.logout);

    app.get('/article/create', articleController.createGet);
    app.post('/article/create', articleController.createPost);
    app.get('/article/details/:id', articleController.details);
    app.post('/article/edit/:id', articleController.createPut);
    app.post('/article/delete/:id', articleController.createDelete);

};
