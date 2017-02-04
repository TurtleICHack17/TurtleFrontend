import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import login from './login'
import cards from './cards'

export default combineReducers({
  routing: routerReducer,
  login,
  cards
})
