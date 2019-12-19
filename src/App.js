import React, {Component} from 'react'
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu.js'
import Workplace from './components/Workplace/Workplace.js'

class App extends Component {
	render() {
		console.log('test')
		return (
			<main>
		      <Header />
		      <div className='container'>
		        <Menu />
		        <Workplace />
		      </div>
		    </main>
		)
	}
}

export default App;
