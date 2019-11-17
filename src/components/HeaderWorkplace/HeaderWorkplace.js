import React, {Component} from 'react'
import Select from "../Select/Select";

class HeaderWorkplace extends Component {

	render() {
		return (
			<div className='ordersMainTitle'>
				{ this.props.showAddButton ? 
					<div className='buttonAddOrder'>
						<div className='buttonAddOrderInside'></div>
						<div className='buttonAddOrderOutside'></div>
					</div>
				: null}
				<h3>{this.props.headerText} / {this.props.countData}</h3>
				{ this.props.showFilters ?
					<div className='filterMenu'>
                        <Select
                            // Данные не подгружаюся динамически поскольку
                            // нужно создавать дополнительную константу с типами
                            // и подвязывать ее к продуктам
                            options={['Monitors','PC']}
                            title={'Тип:'}
                            selectAction={this.props.selectAction}
                            label={'Выберите тип'}
                        />
                    </div>
				: null }
			</div>
		)
	}
}

export default HeaderWorkplace