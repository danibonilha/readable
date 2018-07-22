import { STORE_CATEGORIES, SET_CURRENT_CATEGORY } from '../actions/types';

const INITIAL_STATE = {
	categories: [],
	current: 'all'
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case STORE_CATEGORIES:
			return { ...state, categories: payload };
		case SET_CURRENT_CATEGORY:
			return { ...state, current: payload };
		default:
			return state;
	}
};
