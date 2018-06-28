import { STORE_POSTS, UPDATE_VOTESCORE, DELETE_POST, STORE_BY_CATEGORY } from '../actions/types';

export default (state = { posts: {} }, action) => {
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
		case UPDATE_VOTESCORE:
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
		default:
			return state;
	}
};
