import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPosts } from './../store/actions';
import { PostsList } from './PostsList'



class App extends Component {
	componentDidMount = () => {
		this.props.fetchPosts()
	};
	


	render() {
		return (
			<div className="App">
				<Route path="/" exact render={() => (
					<PostsList posts={this.props.posts}/>
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
