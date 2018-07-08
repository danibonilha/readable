import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import PostDetails from './scenes/PostDetails';

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
