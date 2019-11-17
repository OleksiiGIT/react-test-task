import React, {Component} from 'react'
import {connect} from "react-redux"
import {getOrdersCount, getOrders, loadProductsById} from '../../store/actions/order.js'
import list_icon from '../../img/list_icon.svg'
import delete_icon from '../../img/delete.png'
import Backdrop from '../Backdrop/Backdrop.js'
import Modal from '../Modal/Modal.js'
import HeaderWorkplace from '../HeaderWorkplace/HeaderWorkplace.js'
import Product from "../Product/Product"
import Order from "../Order/Order"

class Orders extends Component {
	constructor(props) {
    super(props);


    this.state = {
      modalOpen: false,
      deletedItem: null,
      showProducts: false,
      activeOrderInfo: {}
    }
  }

	renderPopupDelete(id) {
		this.setState({
			modalOpen: !this.state.modalOpen,
			deletedItem: id
		})
	}

	deleteOrder(id) {
		//Процесс удаления не реализован тк должен работать через api
		alert("Error: order #" + id + " can't be deleted")
	}

	loadProductsById(info, e) {
		this.props.loadProductsById(info[0])
		this.setState({
			showProducts: true,
			activeOrderInfo: {
				id: info[0],
				title: info[1]
			}
		})
	}

	closeProductsHandler() {
		this.setState({
			showProducts: false,
			activeOrderInfo: {}
		})
	}

	renderProducts() {
		return this.props.products.map(prod => {
			if (prod != null)
				return (
					<Product
						key={prod.id}
						status={prod.status}
						img={prod.photo}
						title={prod.title}
						serialNumber={prod.serialNumber}
						shortVersion={true}
					/>
				)
		})
	}

	renderOrders() {

		return this.props.orders.map(order => {
			return (
				<Order
					key={order.id}
					id={order.id}
					title={order.title}
					products={order.products}
					date={order.date}
					activeOrderInfo={this.state.activeOrderInfo}
					loadProductsById={this.loadProductsById.bind(this)}
					renderPopupDelete={this.renderPopupDelete.bind(this)}
					showProducts={this.state.showProducts}
				/>
			)
		})
	}

	render() {

		const specialClasses = [
			'ordersMain',
			this.state.showProducts ? 'showProducts' : ''	
		]

		return (
			<React.Fragment>
				<div className={specialClasses.join(' ')}>
				<HeaderWorkplace
					showAddButton={true}
					headerText='Приходы'
					countData={this.props.ordersCount}
					showFilters={false}
				/>
					<div className='ordersMainContainer'>
						{this.renderOrders()}
						<div className='productsPerOrderContainer'>
						{
							this.state.showProducts ?
									<React.Fragment>
									<h3>{this.state.activeOrderInfo.title}</h3>
									<div className='productsPerOrderContainerAdd'>
										<div className='buttonAddOrder'>
											<div className='buttonAddOrderInside'></div>
										</div>
										<p>Добавить продукт</p>
									</div>
									<div className='productsInsideOrders'>{this.renderProducts()}</div>
									<div className='modalClose' onClick={this.closeProductsHandler.bind(this)}></div>
									</React.Fragment>
													:
													null
						}
						</div>
					</div>
				</div>
				{this.state.modalOpen ? <Backdrop onClick={this.renderPopupDelete.bind(this, this.state.modalOpen)} /> : null}
				{
					this.state.modalOpen ? 
						<Modal 
							onClick={this.renderPopupDelete.bind(this, this.state.modalOpen)} 
							heading='Вы уверены, что хотите удалить этот приход?'
							cancelText='Отменить'
							actionText='Удалить'
							actionFunc={this.deleteOrder.bind(this, this.state.deletedItem)}
						/> 
										: 
										null
				}
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		ordersCount: state.order.ordersCount,
		orders: state.order.orders,
		products: state.order.products
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getOrdersCount: dispatch(getOrdersCount()),
		getOrders: dispatch(getOrders()),
		loadProductsById: id => dispatch(loadProductsById(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)