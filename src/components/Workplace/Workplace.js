import React, {Component} from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import Products from '../Products/Products.js'
import Orders from '../Orders/Orders.js'
import './Workplace.css'

class Workplace extends Component {
	render() {

		const routes = (
			<Switch>
				<Route path="/products" component={Products} />
				<Route path="/" exact component={Orders} />
				<Redirect to="/" />
			</Switch>
		)

		return (
			<div className='workplaceContainer'>
				{routes}
			</div>
		)
	}
}

export default withRouter(Workplace)