import axios from 'axios'

const GET_SINGLE_DISTRO = 'GET_SINGLE_DISTRO'

export const getOneDistro = distro => ({
  type: GET_SINGLE_DISTRO,
  distro
})

export const getSingleDistro = name => async dispatch => {
  try {
    const {data} = await axios.get(`/api/distros/${name}`)
    dispatch(getOneDistro(data))
  } catch (err) {
    console.error(err)
  }
}

const singleDistro = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_DISTRO:
      return action.distro
    default:
      return state
  }
}

export default singleDistro
