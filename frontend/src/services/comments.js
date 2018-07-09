import { request, idGenerator } from '../utils/';

const create = ({ body, author, parentId }) => (
	request({
		url: '/comments/',
		method: 'POST',
		data: {
			id: idGenerator(),
			timestamp: Date.now(),
			body,
			author,
			parentId
		}
	})
);
const getAll = (postId) => (
	request({
		url: `posts/${postId}/comments`,
		method: 'GET'
	})
);
const getById = (id) => (
	request({
		url: `comments/${id}/`,
		method: 'GET'
	})
);
const updateVote = (id, voteType) => (
	request({
		url: `comments/${id}/`,
		method: 'POST',
		data: {
			option: `${voteType}`
		}
	})
);
const update = (id, { body }) => (
	request({
		url: `comments/${id}/`,
		method: 'PUT',
		data: {
			timestamp: Date.now(),
			body
		}
	})
);

const remove = (id) => (
	request({
		url: `comments/${id}/`,
		method: 'DELETE',
	})
);

const CommentsService = {
	create,
	getById,
	getAll,
	update,
	updateVote,
	remove
};

export default CommentsService;
