import { STORE_CATEGORIES, SET_CURRENT_CATEGORY } from '../actions/types';
import { CategoriesService } from './../../services';

const storeCategories = (categories) => ({
	type: STORE_CATEGORIES,
	payload: categories
});

const getCategories = () => async dispatch => (
	CategoriesService.getAll()
		.then(res => (
			dispatch(storeCategories(res.categories))
		))
);

const setCategory = (category) => ({
	type: SET_CURRENT_CATEGORY,
	payload: category
});

export { getCategories, setCategory };
