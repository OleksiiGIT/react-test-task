import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.css'
import avatar from '../../img/avatar.jpg'
import settings from '../../img/settings.svg'
import {subscribeToSessions} from "../../api";

class Menu extends Component {
	constructor(props) {
		super(props);
		subscribeToSessions((err, count) => this.setState({
			count
		}));
	}

	state = {
		count: 0
	};

	renderLinks(links) {
		return links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink
						to={link.to}
						exact={link.exact}
					>
						{link.label}
					</NavLink>
				</li>
			)
		})
	}

	render() {

		const links = [
			{to: '/', label: 'Приход', exact: true},
			{to: '/products', label: 'Продукты', exact: false},
			{to: '/groups', label: 'Группы', exact: false},
			{to: '/users', label: 'Пользователи', exact: false},
			{to: '/settings', label: 'Настройки', exact: false}
		]

		return (
			<div className='sidebar'>
				<h5>Количество активных вкладок: {this.state.count}</h5>
				<div className='sidebarTopInfo'>
					<div className='sidebarTopInfoImg'>
						<img src={avatar} alt="placeholder+image" />
						<div className='sidebarTopInfoSettings'>
							<img src={settings} alt="placeholder+image" />
						</div>
					</div>
				</div>
				<nav>
					<ul>
						{ this.renderLinks( links ) }
					</ul>
				</nav>
			</div>
		)
	}
}

export default Menu