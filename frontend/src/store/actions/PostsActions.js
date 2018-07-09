import { STORE_POSTS, UPDATE_POST_VOTESCORE, DELETE_POST, STORE_BY_CATEGORY, SET_ORDER_BY, POST_ERROR } from '../actions/types';
import { PostsService } from './../../services';
import { normalize, schema } from 'normalizr';

const postsSchema = new schema.Entity('posts');
const postsListSchema = [postsSchema];

const storePosts = (posts) => ({
	type: STORE_POSTS,
	payload: posts
});

const storePostsByCategory = (posts) => ({
	type: STORE_BY_CATEGORY,
	payload: posts
});

const fetchPosts = () => dispatch => (
	PostsService.getAll()
		.then((responsePosts) => {
			let posts = { posts: responsePosts };
			if (responsePosts.length > 0) {
				posts = normalize(responsePosts, postsListSchema).entities;
			}
			dispatch(storePosts(posts));
		})
);

const fetchPostsByCategory = (category) => dispatch => (
	PostsService.getByCategory(category)
		.then((responsePosts) => {
			let posts = { posts: responsePosts };
			if (responsePosts.length > 0) {
				posts = normalize(responsePosts, postsListSchema).entities;
			}
			dispatch(storePostsByCategory(posts));
		})
);

const newPostObject = (post) => ({
	'posts': {
		[post.id]: post
	}
});

const createNewPost = (form) => dispatch => (
	PostsService.create(form)
		.then(post => (
			dispatch(storePosts(newPostObject(post)))
		))
);

const editPost = (id, infoToUpdate) => dispatch => (
	PostsService.update(id, infoToUpdate)
		.then(post => (
			dispatch(storePosts(newPostObject(post)))
		))
);

const getPost = (id) => async dispatch => (
	PostsService.getById(id)
		.then((post) => {
			if (!Object.keys(post).length) {
				throw new Error('Empty Object');
			}
			dispatch(storePosts(newPostObject(post)));
		})
		.catch((err) => {
			dispatch({ type: POST_ERROR });
			throw err;
		})
);

const voteScoreUpdate = (post) => ({
	type: UPDATE_POST_VOTESCORE,
	payload: post
});

const updatePostVote = (id, voteType) => dispatch => (
	PostsService.updateVote(id, voteType)
		.then(post => (
			dispatch(voteScoreUpdate(post))
		))
);
const removeFromState = (id) => ({
	type: DELETE_POST,
	payload: id
});

const deletePost = (id) => dispatch => (
	PostsService.remove(id)
		.then(post => (
			dispatch(removeFromState(post.id))
		))
);

const setSortBy = (type) => ({
	type: SET_ORDER_BY,
	payload: type
});


export {
	fetchPosts,
	updatePostVote,
	deletePost,
	fetchPostsByCategory,
	createNewPost,
	editPost,
	setSortBy,
	getPost
};
