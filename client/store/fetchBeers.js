import axios from 'axios'

const FETCH_BEERS = 'FETCH_BEERS'

export const getAllBeers = beers => ({
  type: FETCH_BEERS,
  beers
})

export const fetchBeers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/beers')
    dispatch(getAllBeers(data))
  } catch (err) {
    console.error(err)
  }
}

const allBeers = (state = [], action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return action.beers
    default:
      return state
  }
}

export default allBeers
