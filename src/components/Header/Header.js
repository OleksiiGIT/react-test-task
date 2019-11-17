import React, {Component} from 'react'
import './Header.css'
import logo from '../../img/logo.svg'
import clock from '../../img/clock.svg'

class Header extends Component {

	constructor() {
		super()
		this.state = { date: new Date() }
	}

	componentDidMount() {
		this.update = setInterval(() => {
			this.setState({ date: new Date() })
		}, 1000)
	}

	getDay() {
		const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
		return days[this.state.date.getDay()];
	}

	getDate() {
		const  month_names =["Янв","Фев","Мар",
			"Апр","Мая","Июн",
			"Июл","Авг","Сен",
			"Окт","Ноя", "Дек"]

		return `${this.state.date.getDate()} ${month_names[this.state.date.getMonth()]}, ${this.state.date.getFullYear()}`
	}

	render() {

		const { date } = this.state;

		return (
			<header>
				<div className='headerWrapper'>
					<div className='headerWrapperTitle'>
						<img src={logo} alt="placeholder+image" />
						<h5>Inventory</h5>
						<input type='text' placeholder='Поиск' /> 
					</div>
					<div className='headerWrapperInfo'>
						<p>{this.getDay()}</p>
						<div className='headerWrapperInfoDate'>
							<p>{this.getDate()}</p>
							<img src={clock} alt='online' />
							<p>{date.toLocaleTimeString()}</p>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header