import {GET_PRODUCTS_COUNT, GET_TYPES, GET_ALL_PRODUCTS, GET_PRODUCT_ORDER} from '../actionTypes.js'
import {orders, products} from '../data.js'

export function getProductsCount() {
	return {
		type: GET_PRODUCTS_COUNT,
		count: products.length
	}
}

export function getTypes() {

	const types = products.map(prod => {
		return prod.type
	})

	return {
		type: GET_TYPES,
		types
	}
}

export function getProducts() {
	return {
		type: GET_ALL_PRODUCTS,
		products
	}
}

export function getProductOrder(id) {

	const res = products.find(item => item.id === id)

	return {
		type: GET_PRODUCT_ORDER,
		orderName: res.title
	}
}