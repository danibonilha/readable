import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchPosts,
	fetchPostsByCategory,
	getCategories,
	setCategory
} from './../store/actions';
import PostsList from './PostsList';
import { Header } from './Header';
import CategoryTabs from './CategoryTabs';

class Home extends Component {
	componentDidMount = () => {
		const { fetchPosts, getCategories } = this.props;
		fetchPosts();
		getCategories();
	};

	componentDidUpdate = () => {
		if (this.props.categories) {
			this.handleQueryCategory();
		}
	};

	handleQueryCategory = () => {
		const { match, setCategory } = this.props;
		if (this.isCategoryValid()) {
			setCategory(match.params.category);
		}
	};

	isCategoryValid = () => {
		const { categories, match } = this.props;
		return categories.some((category) => category.name === match.params.category);
	}

	handleChange = (event, value) => {
		const { setCategory, fetchPostsByCategory, fetchPosts } = this.props;
		setCategory(value);
		value !== 'all'
			? fetchPostsByCategory(value)
			: fetchPosts();
	};

	render() {
		return (
			<div>
				<Header />
				<CategoryTabs
					onChange={this.handleChange} />
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

export default connect(mapStateToProps,
	{
		fetchPosts,
		fetchPostsByCategory,
		getCategories,
		setCategory
	})(Home);
