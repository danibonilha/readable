import { STORE_COMMENTS, UPDATE_COMMENT_VOTESCORE, DELETE_COMMENT, RESET_STATE_COMMENT } from '../actions/types';
import { CommentsService } from './../../services';
import { normalize, schema } from 'normalizr';

const commentsSchema = new schema.Entity('comments');
const commentsListSchema = [commentsSchema];

const storeComments = (comments) => ({
	type: STORE_COMMENTS,
	payload: comments
});

const fetchComments = (postId) => dispatch => (
	CommentsService.getAll(postId)
		.then((responseComments) => {
			let comments = { comments: responseComments };
			if (responseComments.length > 0) {
				comments = normalize(responseComments, commentsListSchema).entities;
			}
			dispatch(
				storeComments(comments)
			);
		})
);

const newCommentsObject = (comment) => ({
	'comments': {
		[comment.id]: comment
	}
});

const createNewComment = (form, parentId) => async dispatch => (
	CommentsService.create({...form, parentId})
		.then((comment) => dispatch(
			storeComments(newCommentsObject(comment))
		))
);

const editComment = (id, infoToUpdate) => dispatch => (
	CommentsService.update(id, infoToUpdate)
		.then((comment) => dispatch(
			storeComments(newCommentsObject(comment))
		))
);

const getComment = (id) => dispatch => (
	CommentsService.getById(id)
		.then((comment) => {
			dispatch(
				storeComments(newCommentsObject(comment))
			);
		})
);

const voteScoreUpdate = (comment) => ({
	type: UPDATE_COMMENT_VOTESCORE,
	payload: comment
});

const updateCommentVote = (id, voteType) => dispatch => (
	CommentsService.updateVote(id, voteType)
		.then((comment) => dispatch(
			voteScoreUpdate(comment)
		))
);
const removeFromState = (id) => ({
	type: DELETE_COMMENT,
	payload: id
});

const deleteComment = (id) => dispatch => (
	CommentsService.remove(id)
		.then((comment) => dispatch(
			removeFromState(comment.id)
		))
);

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
