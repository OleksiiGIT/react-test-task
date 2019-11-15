import React, {Component} from 'react'
import './Header.css'
import logo from '../../img/logo.svg'
import clock from '../../img/clock.svg'

class Header extends Component {
	render() {

		const date = new Date()

		function getTime() {
			const minutes = date.getMinutes()
			return minutes < 10 ? `${date.getHours()}:0${minutes}` : `${date.getHours()}:${minutes}`
		}

		function getDate() {
			const  month_names =["Янв","Фев","Мар",
                      "Апр","Мая","Июн",
                      "Июл","Авг","Сен",
                      "Окт","Ноя", "Дек"]

			return `${date.getDate()} ${month_names[date.getMonth()]}, ${date.getFullYear()}`
		}

		function getDay() {
			const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  			return days[date.getDay()];
		}

		return (
			<header>
				<div className='headerWrapper'>
					<div className='headerWrapperTitle'>
						<img src={logo} alt="placeholder+image" />
						<h5>Inventory</h5>
						<input type='text' placeholder='Поиск' /> 
					</div>
					<div className='headerWrapperInfo'>
						<p>{getDay()}</p>
						<div className='headerWrapperInfoDate'>
							<p>{getDate()}</p>
							<img src={clock} alt='online' />
							<p>{getTime()}</p>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header