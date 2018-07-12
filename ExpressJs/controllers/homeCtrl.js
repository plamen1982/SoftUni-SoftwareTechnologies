const homeCtrl = (req, res) => {
    res.send(
        "<a href='/register'>Register</a>" +
        "<h1 style='text-align: center'>Articles</h1><h2 style='text-align: center'>First Article</h2>" +
        "<h3 style='text-align: center'>Second Article</h3>"
    );
};

module.exports = homeCtrl;