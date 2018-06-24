import { STORE_POSTS } from '../actions/types';

export default (state = { posts: [] }, action) => {
	switch (action.type) {
		case STORE_POSTS:
			return {...state, posts: action.payload};
		default:
			return state;
	}
};