import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Switch from 'react-router-dom/Switch';

class App extends Component {
	render() {
		return (
			<Switch>				
				<Route path="/" exact component={Home} />
				<Route path="/:category"  component={Home} />
			</Switch>
		);
	}
}

export default App;
