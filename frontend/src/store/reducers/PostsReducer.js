import { STORE_POSTS, UPDATE_VOTESCORE } from '../actions/types';

export default (state = { posts: {} }, action) => {
	const { payload } = action;
	switch (action.type) {
		case STORE_POSTS:
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
			}
		default:
			return state;
	}
};