import {GET_PRODUCTS_COUNT, GET_TYPES, GET_ALL_PRODUCTS} from '../actionTypes.js'
import {GET_PRODUCT_ORDER} from "../actionTypes";

const initialState = {
    productsCount: 0,
    products: [],
    types: []
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_COUNT:
            return {
                ...state, productsCount: action.count
            }
        case GET_TYPES:
            return {
                ...state, types: action.types
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state, products: action.products
            }
        case GET_PRODUCT_ORDER:
            return {
                ...state, orderName: action.orderName
            }
        default:
            return state
    }
}