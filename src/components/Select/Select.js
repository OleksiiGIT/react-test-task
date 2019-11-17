import React, {Component} from 'react'

class Select extends Component {
    constructor(props) {
        super(props)
    }

    renderOptions() {
        return this.props.options.map((item, i) => {
            return i === 0 ?
                <React.Fragment key={i}>
                    <option value="none" hidden>{this.props.label}</option>
                    <option value={item}>{item}</option>
                </React.Fragment>
                :
                <option key={i} value={item}>{item}</option>
        })
    }

    render() {
        return (
            <div className='select'>
                <h5>{this.props.title}</h5>
                <select onChange={this.props.selectAction}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}

export default Select