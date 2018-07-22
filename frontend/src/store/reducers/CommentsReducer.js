import {
	STORE_COMMENTS,
	UPDATE_COMMENT_VOTESCORE,
	DELETE_COMMENT,
	RESET_STATE_COMMENT
} from '../actions/types';

const INITIAL_STATE = {
	comments: {},
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case STORE_COMMENTS:
			return {
				...state,
				comments: {
					...state.comments,
					...payload.comments
				}
			};
		case UPDATE_COMMENT_VOTESCORE:
			return {
				...state,
				comments: {
					...state.comments,
					[payload.id]: {
						...state.comments[payload.id],
						voteScore: payload.voteScore
					}
				}
			};
		case DELETE_COMMENT: {
			/* With destructing it separates the posts that should be deleted 
			 * and using the rest pattern is possible to assign the 
			 * rest of the object to updatedPosts variable
		   */
			const { [payload]: deleted, ...updatedComments } = state.comments;
			return {
				...state, comments: updatedComments
			};
		}
		case RESET_STATE_COMMENT:
			return INITIAL_STATE;
		default:
			return state;
	}
};
