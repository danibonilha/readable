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
import { NotFound } from './NotFound';

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
		else {
			setCategory('invalid');
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
		} else {
			fetchPosts();
		}
	};

	handleChange = (event, category) => {
		event.preventDefault();
		this.props.setCategory(category);
		this.handlePostsList(category);
	};

	render() {
		const { currentCategory } = this.props;
		if (currentCategory === 'invalid') {
			return (
				<NotFound />
			);
		}
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
	const { categories, current } = CategoryReducer;
	return {
		categories,
		currentCategory: current
	};
};

export default connect(mapStateToProps, {
	fetchPosts,
	fetchPostsByCategory,
	getCategories,
	setCategory
})(Home);
