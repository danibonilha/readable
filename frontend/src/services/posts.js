import { request, idGenerator } from '../utils/';

const create = ({ title, body, author, category }) => (
	request({
		url: '/posts/',
		method: 'POST',
		data: {
			id: idGenerator(),
			timestamp: Date.now(),
			title,
			body,
			author,
			category
		}
	})
);
const getAll = () => (
	request({
		url: '/posts/',
		method: 'GET'
	})
);
const getById = (id) => (
	request({
		url: `posts/${id}/`,
		method: 'GET'
	})
);
const getByCategory = (category) => (
	request({
		url: `/${category}/posts/`,
		method: 'GET'
	})
);
const updateVote = (id, voteType) => (
	request({
		url: `posts/${id}/`,
		method: 'POST',
		data: {
			option: `${voteType}`
		}
	})
);
const update = (id, { title, body }) => (
	request({
		url: `posts/${id}/`,
		method: 'PUT',
		data: {
			title,
			body
		}
	})
);

const remove = (id) => (
	request({
		url: `posts/${id}/`,
		method: 'DELETE',
	})
);

const PostsService = {
	create,
	getById,
	getAll,
	getByCategory,
	update,
	updateVote,
	remove
};

export default PostsService;
