import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component {

//Не стал делать компонент кнопки, поскольку в данной версии всего 2 кнопки

	render() {
		return (
			<div className='modalContainer'>
				<div className='modalTitle'>
					<h3>{this.props.heading}</h3>
				</div>
				<div className='modalConfig'>
					<button className='modalConfigCancel' onClick={this.props.onClick}>{this.props.cancelText}</button>
					<button className='modalConfigAction' onClick={this.props.actionFunc}>{this.props.actionText}</button>
				</div>
				<div className='modalClose' onClick={this.props.onClick}></div>
			</div>
		)
	}

}

export default Modal