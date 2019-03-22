const router = require('express').Router()
const {Distros, BeerList} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const distros = await Distros.findAll({
      attributes: ['name']
    })
    res.json(distros)
  } catch (err) {
    next(err)
  }
})

router.get('/:name', async (req, res, next) => {
  try {
    const distro = await Distros.findById(req.params.name, {
      include: [{model: BeerList, attributes: ['id', 'name', 'tap', 'cleaned']}]
    })
    res.json(distro)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Distros.create(req.body)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const distro = await Distros.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(304)
  } catch (err) {
    next(err)
  }
})

module.exports = router
