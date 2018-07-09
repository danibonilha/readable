import { STORE_POSTS, UPDATE_POST_VOTESCORE, DELETE_POST, STORE_BY_CATEGORY, SET_ORDER_BY, UPDATE_COMMENT_COUNT } from '../actions/types';

const INITIAL_STATE = {
	posts: {},
	sortType: ''
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
				}
			};
		case STORE_BY_CATEGORY:
			return { ...state, posts: payload.posts };
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
			const { [payload]: deleted, ...updatedPosts } = state.posts;
			return {
				...state, posts: updatedPosts
			};
		}
		case SET_ORDER_BY: {
			return { ...state, sortType: payload };
		}
		default:
			return state;
	}
};
