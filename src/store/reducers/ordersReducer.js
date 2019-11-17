import {GET_ORDERS_COUNT, GET_ORDERS, LOAD_PRODUCTS_BY_ID} from '../actionTypes.js'

const initialState = {
    ordersCount: 0,
    orders: [],
    products: []
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS_COUNT:
            return {
                ...state, ordersCount: action.count
            }
        case GET_ORDERS:
            return {
                ...state, orders: action.orders
            }
        case LOAD_PRODUCTS_BY_ID:
            return {
                ...state, products: action.products
            }
        default:
            return state
    }
}