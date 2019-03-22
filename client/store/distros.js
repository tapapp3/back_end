import axios from 'axios'

const GET_DISTROS = 'GET_DISTROS'

export const getDistros = distros => ({
  type: GET_DISTROS,
  distros
})

export const distroThunk = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/distros`)
    dispatch(getDistros(data))
  } catch (err) {
    console.error(err)
  }
}

const distros = (state = [], action) => {
  switch (action.type) {
    case GET_DISTROS:
      return action.distros
    default:
      return state
  }
}

export default distros
