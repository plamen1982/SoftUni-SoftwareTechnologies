const express = require('express');
const app = express();
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controllers.homeCtrl);
app.get('/register', controllers.userCtrl.registerGet);
app.post('/register', controllers.userCtrl.registerPost);
app.get('/users/:id', controllers.userCtrl.getUserById);
app.get('/about', controllers.aboutCtrl.about);

app.listen(3000, () => {
    console.log('Listening ot port: http://localhost:3000')
});