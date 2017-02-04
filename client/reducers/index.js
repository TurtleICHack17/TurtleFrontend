import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import login from './login'

export default combineReducers({
  routing: routerReducer,
  login
})
