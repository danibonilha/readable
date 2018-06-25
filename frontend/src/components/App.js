import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPosts } from './../store/actions';

class App extends Component {
	componentDidMount = () => {
		this.props.fetchPosts()
	};
	

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Route path="/posts" render={() => (
					<ul>
					{this.props.posts && 
						this.props.posts.map(post => <li key={post.id}>{post.title}</li>)}
				</ul>
				)} />

			</div>
		);
	}
}

const mapStateToProps = ({ PostsReducer }) => { 
	const { posts } = PostsReducer;
	return {
		posts
	}
}

export default connect(mapStateToProps, { fetchPosts })(App);
