'use strict'

const db = require('../server/db')
const {User, Distros, BeerList} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      isAdmin: true,
      restaurant: 'Old Slo BBQ'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      isAdmin: true,
      restaurant: 'Taco Truck'
    })
  ])

  const distributors = await Promise.all([
    Distros.create({name: 'PacBev'}),
    Distros.create({name: 'CCD'}),
    Distros.create({name: 'Thomas Weidner'})
  ])

  const beers = await Promise.all([
    BeerList.create({
      name: 'Elysian Space Dust',
      distributionName: 'PacBev',
      tap: 1,
      cleaned: Date.now() - 1000
    }),
    BeerList.create({
      name: 'Stone IPA',
      distributionName: 'CCD',
      tap: 2,
      cleaned: Date.now() - 100000
    }),
    BeerList.create({
      name: 'Kern River Pumpkin Ale',
      distributionName: 'Thomas Weidner',
      tap: 3,
      cleaned: Date.now() - 50000
    }),
    BeerList.create({
      name: 'Firestone Sucaba',
      distributionName: 'PacBev',
      tap: 4,
      cleaned: Date.now() - 60000
    }),
    BeerList.create({
      name: '32 North Considerate Gentleman',
      distributionName: 'Thomas Weidner',
      tap: 5,
      cleaned: Date.now() - 70000
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${beers.length} beers`)
  console.log(`seeded ${distributors.length} distributors`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
