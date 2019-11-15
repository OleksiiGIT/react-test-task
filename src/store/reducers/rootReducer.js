import {combineReducers} from 'redux'
import orderReduser from './ordersReducer.js'

export default combineReducers({
    order: orderReduser,

})