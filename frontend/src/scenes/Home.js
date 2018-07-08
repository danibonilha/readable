import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchPosts,
	fetchPostsByCategory,
	getCategories,
	setCategory
} from '../store/actions';
import PostsList from '../components/Posts/PostsList';
import { Header } from '../components/Header/Header';
import CategoryTabs from '../components/Posts/CategoryTabs';

class Home extends Component {
	componentDidMount = () => {
		this.props.getCategories()
			.then(() => this.handleQueryCategory());
	};

	handleQueryCategory = () => {
		const { match, setCategory } = this.props;
		const category = match.params.category || 'all';
		if (category === 'all' || this.isCategoryValid()) {
			setCategory(category);
			this.handlePostsList(category);
		}
	};

	isCategoryValid = () => {
		const { categories, match } = this.props;
		return categories.some(category => (
			category.name === match.params.category
		));
	};

	handlePostsList = (category) => {
		const { fetchPostsByCategory, fetchPosts } = this.props;
		if (category !== 'all') {
			fetchPostsByCategory(category);
		}	else {	
			fetchPosts();
		}				
	};

	handleChange = (event, value) => {
		this.props.setCategory(value);
		this.handlePostsList(value);
	};

	render() {
		return (
			<div>
				<Header />
				<CategoryTabs
					onChange={this.handleChange} 
				/>
				<PostsList />
			</div>
		);
	}
}

const mapStateToProps = ({ CategoryReducer }) => {
	const { categories } = CategoryReducer;
	return {
		categories
	};
};

export default connect(mapStateToProps,	{
	fetchPosts,
	fetchPostsByCategory,
	getCategories,
	setCategory
})(Home);
