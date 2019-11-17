import React, {Component} from 'react'
import HeaderWorkplace from '../HeaderWorkplace/HeaderWorkplace.js'
import {connect} from "react-redux"
import {getProductsCount, getTypes, getProducts, getProductOrder} from '../../store/actions/products.js'
import Product from "../Product/Product"

class Products extends Component {
	constructor(props) {
		super(props)

		this.state = {
			select: null
		}
	}

	renderProducts() {
		return this.props.products.filter(item => item.type === this.state.select || !this.state.select).map((prod, i) => {
			return (
				<Product
					key={i}
					status={prod.status}
					img={prod.photo}
					title={prod.title}
					serialNumber={prod.serialNumber}
					shortVersion={false}
					guarantee={prod.guarantee}
					isNew={prod.isNew}
					price={prod.price}
					date={prod.date}
					specification={prod.specification}
					orderName={this.props.getProductOrder(prod.id).orderName}
				/>
			)
		})
	}

	selectAction(e) {
		this.setState({
			select: e.target.value
		})
	}

	render() {
		return (
			<div className='productsMain'>
				<HeaderWorkplace
					showAddButton={false}
					headerText='Продукты'
					countData={this.props.productsCount}
					showFilters={true}
					listData={this.props.types}
					selectAction={this.selectAction.bind(this)}
				/>
				<div className="productsMainContainer">
					{ this.renderProducts() }
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		productsCount: state.product.productsCount,
		types: state.product.types,
		products: state.product.products
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getProductsCount: dispatch(getProductsCount()),
		getTypes: dispatch(getTypes()),
		getProducts: dispatch(getProducts()),
		getProductOrder: id => dispatch(getProductOrder(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)