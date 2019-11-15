import React, {Component} from 'react'
import {connect} from "react-redux"
import {getOrdersCount, getOrders} from '../../store/actions/order.js'
import list_icon from '../../img/list_icon.svg'
import delete_icon from '../../img/delete.png'

class Orders extends Component {

	renderOrders() {

		return this.props.orders.map(order => {
			//Вычисляем количество продуктов у каждого заказа
			let prod_per_order = 0
			order.products.map(prod => { if (prod.order == order.id) prod_per_order++ })

			//Получаем отдельно время и дату
			const date_arr = order.date.split(' ')

			return (
				<div className='orderItem' key={order.id}>
					<div className='orderItemTitle'>{order.title}</div>
					<div className='orderItemInfo'>
						<div className='orderItemInfoProducts'>
							<div className='orderItemInfoProductsImg'>
								<img src={list_icon} alt="placeholder+image" />
							</div>
							<div className='orderItemInfoProductsDesc'>
								<p>{prod_per_order}</p>
								<p>Продукта</p>
							</div>
						</div>
						<div className='orderItemInfoDate'>
							<div className='orderTopSet'>{date_arr[1]}</div>
							<div className='orderBottomSet'>{date_arr[0].replace(/\-/g,'/')}</div>
						</div>
						<div className='orderItemInfoPrice'>
							<div className='orderTopSet'>2500$</div>
							<div className='orderBottomSet'>250 000. 50 <p>uah</p></div>
						</div>
						<div className='orderItemInfoDelete'>
							<img src={delete_icon} alt="placeholder+image" />
						</div>
					</div>
				</div>
			)
		})
	}

	render() {

		return (
			<div className='ordersMain'>
				<div className='ordersMainTitle'>
					<div className='buttonAddOrder'>
						<div className='buttonAddOrderInside'></div>
						<div className='buttonAddOrderOutside'></div>
					</div>
					<h3>Приходы / {this.props.ordersCount}</h3>
				</div>
				<div className='ordersMainContainer'>
					{this.renderOrders()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		ordersCount: state.order.ordersCount,
		orders: state.order.orders
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getOrdersCount: dispatch(getOrdersCount()),
		getOrders: dispatch(getOrders())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)