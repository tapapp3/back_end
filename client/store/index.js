import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import distros from './distros'
import allBeers from './fetchBeers'
import singleDistro from './singleDistro'

const reducer = combineReducers({user, distros, singleDistro, allBeers})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './distros'
export * from './fetchBeers'
export * from './singleDistro'
