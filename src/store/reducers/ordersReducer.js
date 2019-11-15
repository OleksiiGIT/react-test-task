import {GET_ORDERS_COUNT, GET_ORDERS} from '../actionTypes.js'

const initialState = {
    ordersCount: 0,
    orders: []
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
        default:
            return state
    }
}