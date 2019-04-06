const User = require('./user')
const Distros = require('./distros')
const BeerList = require('./BeerList')
const OnTaps = require('./onTap')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Distros.hasMany(BeerList)
BeerList.belongsTo(Distros)
OnTaps.belongsTo(BeerList)
OnTaps.belongsTo(User)
BeerList.hasMany(OnTaps)
User.hasMany(OnTaps)
// BeerList.belongsToMany(User, {through: OnTaps})
// User.belongsToMany(BeerList, {through: OnTaps})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Distros,
  BeerList,
  OnTaps
}
