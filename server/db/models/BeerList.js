const db = require('../db')
const Sequelize = require('sequelize')

const BeerList = db.define('beerlist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tap: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  cleaned: {
    type: Sequelize.DATE
  }
})

module.exports = BeerList
