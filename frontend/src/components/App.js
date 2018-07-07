import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Switch from 'react-router-dom/Switch';
import PostDetails from './PostDetails';

class App extends Component {
	render() {
		return (
			<Switch>				
				<Route exact path="/" component={Home} />
				<Route exact path="/:category" component={Home} />
				<Route exact path="/:category/:id" component={PostDetails} />
			</Switch>
		);
	}
}

export default App;
