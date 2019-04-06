const db = require('../db')
const Sequelize = require('sequelize')

const BeerList = db.define('beerlist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cleaned: {
    type: Sequelize.BIGINT
  },
  onTap: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

BeerList.beforeCreate(list => {
  list.cleaned = list.cleaned.getTime() - 1200000000
})

module.exports = BeerList
