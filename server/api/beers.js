const router = require('express').Router()
const {BeerList} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const beers = await BeerList.findAll({
      attributes: ['name', 'tap', 'distributionName', 'cleaned']
    })
    res.json(beers)
  } catch (err) {
    next(err)
  }
})

module.exports = router
