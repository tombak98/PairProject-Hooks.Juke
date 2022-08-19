const Sequelize = require('sequelize');
const db = require('./db');
const { Op } = require('sequelize')

const Artist = db.define('artist', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Artist