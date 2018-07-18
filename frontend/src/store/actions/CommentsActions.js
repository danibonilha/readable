import {
	STORE_COMMENTS,
	UPDATE_COMMENT_VOTESCORE,
	DELETE_COMMENT,
	RESET_STATE_COMMENT
} from '../actions/types';
import { CommentsService } from './../../services';
import { normalize, schema } from 'normalizr';

const commentsSchema = new schema.Entity('comments');
const commentsListSchema = [commentsSchema];

const storeComments = (comments) => ({
	type: STORE_COMMENTS,
	payload: comments
});

const fetchComments = (postId) => async dispatch => {
	const responseComments = await CommentsService.getAll(postId);
	let comments = { comments: responseComments };
	if (responseComments.length > 0) {
		comments = normalize(responseComments, commentsListSchema).entities;
	}
	dispatch(storeComments(comments));
};

const newCommentsObject = (comment) => ({
	'comments': {
		[comment.id]: comment
	}
});

const createNewComment = (form, parentId) => async dispatch => {
	const comment = await CommentsService.create({ ...form, parentId });
	return dispatch(storeComments(newCommentsObject(comment)));
};

const editComment = (id, infoToUpdate) => async dispatch => {
	const comment = await CommentsService.update(id, infoToUpdate);
	return dispatch(storeComments(newCommentsObject(comment)));
};

const getComment = (id) => async dispatch => {
	const comment = await CommentsService.getById(id);
	dispatch(storeComments(newCommentsObject(comment)));
};

const voteScoreUpdate = (comment) => ({
	type: UPDATE_COMMENT_VOTESCORE,
	payload: comment
});

const updateCommentVote = (id, voteType) => async dispatch => {
	const comment = await CommentsService.updateVote(id, voteType);
	dispatch(voteScoreUpdate(comment));

};
const removeFromState = (id) => ({
	type: DELETE_COMMENT,
	payload: id
});

const deleteComment = (id) => async dispatch => {
	const comment = await CommentsService.remove(id);
	dispatch(removeFromState(comment.id));
};


const resetInitialState = () => ({
	type: RESET_STATE_COMMENT
});

export {
	fetchComments,
	updateCommentVote,
	deleteComment,
	createNewComment,
	editComment,
	getComment,
	resetInitialState
};
