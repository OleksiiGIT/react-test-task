import {combineReducers} from 'redux'
import orderReduser from './ordersReducer.js'
import productReducer from './productsReducer.js'

export default combineReducers({
    order: orderReduser,
    product: productReducer
})