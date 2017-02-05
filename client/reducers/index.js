import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import login from './login'
import cards from './cards'
import matchState from './matchState'

export default combineReducers({
  routing: routerReducer,
  login,
  cards,
  matchState
})
