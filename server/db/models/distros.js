const db = require('../db')
const Sequelize = require('sequelize')

const Distros = db.define('distribution', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true
  }
})

module.exports = Distros
