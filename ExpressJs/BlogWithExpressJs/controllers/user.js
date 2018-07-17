const encryption = require("../utilities/encryption");
const User = require('../models/index').User;

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },

    registerPost: (req, res) => {
        let registerArgs = req.body;

        User.findOne({where: {email: registerArgs.email}}).then(user => {
            let errorMsg = '';
            if (user) {
                errorMsg = 'User with the same email already exists!';
            } else if (registerArgs.password !== registerArgs.repeatedPassword) {
                errorMsg = 'Passwords do not match!'
            }

            if (errorMsg) {
                registerArgs.error = errorMsg;
                res.render('user/register', registerArgs)
            } else {

                let salt = encryption.generateSalt();
                let passwordHash = encryption.hashPassword(registerArgs.password, salt);

                let userObject = {
                    email: registerArgs.email,
                    passwordHash: passwordHash,
                    fullName: registerArgs.fullName,
                    salt: salt
                };

                User.create(userObject).then(user => {
                    req.logIn(user, (err) => {
                        if (err) {
                            registerArgs.error = err.message;
                            res.render('user/register', registerArgs.dataValues);
                            return;
                        }
                        res.redirect('/')
                    })
                })
            }
        })
    },

    loginGet: (req, res) => {
        res.render('user/login');
    },

    loginPost: (req, res) => {
        let loginArgs = req.body;
        User.findOne({where: {email: loginArgs.email}}).then(user => {
            if (!user || !user.authenticate(loginArgs.password)) {
                loginArgs.error = 'Either username or password is invalid!';
                res.render('user/login', loginArgs);
                return;
            }

            req.logIn(user, (err) => {
                if (err) {
                    res.redirect('/user/login', {error: err.message});
                    return;
                }
                res.redirect('/');
            })
        })
    },
    logout: (req, res) => {
        req.logOut();
        res.redirect('/');
    },
    getAllUsers: (req, res) => {
            User.findAll({ limit: 10 }).then(users => {
                res.render('user/show-all', { users })
            });
    },
    deleteUser: (req, res) => {
        let id = req.params.id;

        User.destroy({
            where: {
                id: id
            }
        });
        User.findAll({ limit: 10 }).then(users => {
            res.render('user/show-all', { users })
        });
    },
    editUserGet: (req, res) => {
        let id = req.params.id;

        User.findById(id).then(user => {
            console.log(`Id: ${user}`);
            res.render('user/edit-user', {user})
        })
    },
    editUserPost: (req, res) => {
        let id = req.params.id;
        let editArgs = req.body;

        User.update(
            {
                email: editArgs.email,
                password: editArgs.password,
            } ,
            {
                where:{ id: id }
            }
        );
        User.findAll({ limit: 10 }).then(users => {
            res.render('user/show-all', {users})
        })
    },
}


// const seed  = {
//
//
//  user: User.findOne({where: {email: 'plamen@plamen.bg'}}).then(user => {
//
//             let salt = encryption.generateSalt();
//             let passwordHash = encryption.hashPassword('password', salt);
//
//             let userObject = {
//                 email: 'plamen@plamen.bg',
//                 passwordHash: passwordHash,
//                 fullName: 'Plamen Hristov',
//                 salt: salt,
//                 isAdmin: true
//             };
//
//             User.create(userObject).then(user => {
//                 req.logIn(user, (err) => {
//                     if (err) {
//                         registerArgs.error = err.message;
//                         res.render('user/register', {});
//                         return;
//                     }
//                     res.redirect('/')
//                 })
//             })
//
//     })
// }
