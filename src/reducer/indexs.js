import {togolle} from './login'
import {order} from './caltotal'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  togolle,
  order
})

export default reducer
