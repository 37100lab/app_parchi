import { combineReducers } from 'redux'
import authReducer from './auth'
import mapReducer from './map'

export default combineReducers({
  auth: authReducer,
  map: mapReducer,
})
