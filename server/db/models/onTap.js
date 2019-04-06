const Sequelize = require('sequelize')
const db = require('../db')

const OnTaps = db.define('OnTap', {
  tap: {
    type: Sequelize.INTEGER
  }
})

module.exports = OnTaps
