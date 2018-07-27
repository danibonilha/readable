import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import PostDetails from './scenes/PostDetails';
import NotFound from './scenes/NotFound';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/:category" component={Home} />
				<Route exact path="/:category/:id" component={PostDetails} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default App;
