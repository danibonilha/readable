import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPosts } from './../store/actions';
import PostsList  from './PostsList';

class App extends Component {
	componentDidMount = () => {
		this.props.fetchPosts();
	};
	
	render() {
		return (
			<div>
				<Route path="/" exact render={() => (
					<PostsList />
				)} />
			</div>
		);
	}
}

export default connect(null, { fetchPosts })(App);
