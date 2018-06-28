import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPosts, fetchPostsByCategory, getCategories, setCategory } from './../store/actions';
import PostsList  from './PostsList';
import { Header } from './Header';
import CategoryTabs from './CategoryTabs';

class App extends Component {
	componentDidMount = () => {
		this.props.fetchPosts();
		this.props.getCategories();
	};

	handleChange = (event, value) => {
		this.props.setCategory(value);
		if(value !== 'all'){
			this.props.fetchPostsByCategory(value);
		}
		else {
			this.props.fetchPosts();
		}			
	};
	render() {
		return (
			<div>
				<Route path="/" exact render={() => (	
					<div>			
						<Header />
						<CategoryTabs 
							onChange={this.handleChange}/>
						<PostsList />
					</div>
				)} />
			</div>
		);
	}
}

export default connect(null, 
	{ fetchPosts,
		fetchPostsByCategory,
		getCategories, 
		setCategory 
	})(App);
