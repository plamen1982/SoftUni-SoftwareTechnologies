module.exports = {
    registerGet: (req, res) => {
        res.send("<a href='/'>Home Page</a>" +
            "<form method='post' >" +
            "<h1 style='text-align: center'>Register Page:</h1>" +
            "<label for='num1'>Username</label>" +
            "<input type='text' id='num1' name='user[username]'><br>" +
            "<label for='num1'>Email</label>" +
            "<input type='email' id='email' name='user[email]'><br>" +
            "<input type='submit' value='Submit'>" +
            "</form>"
        )
    },

    registerPost: (req, res) => {
        let name = req.body.user.username;
        let email = req.body.user.email;
        res.send("<a href='/'>Home</a><br>" +
                    "<h1>Welcome" +  name + ", your email is:" +  email + "</h1>"
        );
    },

    getUserById: (req, res) => {
        let userId = req.params.id;
        res.send("<h1>Hi user with id:" + userId + "</h1>")
    }
}


