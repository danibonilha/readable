import { STORE_COMMENTS, UPDATE_COMMENT_VOTESCORE, DELETE_COMMENT } from '../actions/types';

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
			const { [payload]: deleted, ...updatedComments } = state.comments;
			return {
				...state, comments: updatedComments
			};
		}
		default:
			return state;
	}
};
