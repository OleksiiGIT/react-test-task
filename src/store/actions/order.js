import {GET_ORDERS_COUNT, GET_ORDERS, LOAD_PRODUCTS_BY_ID} from '../actionTypes.js'
import {orders, products} from '../data.js'

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

export function loadProductsById(id) {

	const neededProducts = products.map(prod => {
		return prod.order == id ? prod : null
	})

	return {
		type: LOAD_PRODUCTS_BY_ID,
		products: neededProducts
	}
}