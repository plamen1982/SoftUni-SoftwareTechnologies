const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Issue',{
        title: {
            type: Sequelize.TEXT
        },
        content: {
            type: Sequelize.TEXT
        },
        priority: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false,
    })
};