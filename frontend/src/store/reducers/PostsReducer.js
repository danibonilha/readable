import {
	STORE_POSTS,
	UPDATE_POST_VOTESCORE,
	DELETE_POST,
	STORE_BY_CATEGORY,
	SET_ORDER_BY, POST_ERROR
} from '../actions/types';

const INITIAL_STATE = {
	posts: {},
	sortType: '',
	hasErrored: false
};
export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case STORE_POSTS:
			return {
				...state,
				posts: {
					...state.posts,
					...payload.posts
				},
				hasErrored: false
			};
		case STORE_BY_CATEGORY:
			return { ...state, posts: payload.posts, hasErrored: false };
		case UPDATE_POST_VOTESCORE:
			return {
				...state,
				posts: {
					...state.posts,
					[payload.id]: {
						...state.posts[payload.id],
						voteScore: payload.voteScore
					}
				}
			};
		case DELETE_POST: {
			/* With destructing it separates the posts that should be deleted 
			 * and using the rest pattern is possible to assign the 
			 * rest of the object to updatedPosts variable
		   */
			const { [payload]: deleted, ...updatedPosts } = state.posts;
			return {
				...state, posts: updatedPosts
			};
		}
		case SET_ORDER_BY: {
			return { ...state, sortType: payload };
		}
		case POST_ERROR: {
			return { ...state, hasErrored: true };
		}
		default:
			return state;
	}
};
