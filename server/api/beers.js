const router = require('express').Router()
const {BeerList, OnTaps, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const beers = await BeerList.findAll({
      include: [{model: OnTaps, where: {userId: req.user.id}}]
    })
    beers.sort((a, b) => a.id - b.id)
    res.json(beers)
  } catch (err) {
    next(err)
  }
})

module.exports = router
