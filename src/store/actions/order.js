import {GET_ORDERS_COUNT, GET_ORDERS} from '../actionTypes.js'
import {orders} from '../data.js'

export function getOrdersCount() {
	return {
		type: GET_ORDERS_COUNT,
		count: orders.length
	}
}

export function getOrders() {
	return {
		type: GET_ORDERS,
		orders
	}
}