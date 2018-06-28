import { STORE_CATEGORIES, SET_CURRENT_CATEGORY } from '../actions/types';

export default (state = { categories: [], current: 'all' }, action) => {
	const { payload } = action;
	if (action.type === STORE_CATEGORIES) {
		return { ...state, categories: payload };
	}
	else if (action.type === SET_CURRENT_CATEGORY) {
		return { ...state, current: payload };
	}
	else	{
		return state;
	}
};
