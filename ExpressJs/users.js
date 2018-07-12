let user = {
  name: 'Pesho',
  email: 'pesho@pesho.bg'
};



module.exports = {
    userInfo: user,
    getName: function () {
        console.log(`Hello ${user.name}`)
    }

};