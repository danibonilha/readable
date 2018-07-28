import {
	STORE_POSTS,
	UPDATE_POST_VOTESCORE,
	DELETE_POST,
	STORE_BY_CATEGORY,
	SET_ORDER_BY,
	POST_ERROR
} from '../actions/types';
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

const fetchPosts = () => async dispatch => {
	const responsePosts = await PostsService.getAll();
	let posts = { posts: responsePosts };
	if (responsePosts.length > 0) {
		posts = normalize(responsePosts, postsListSchema).entities;
	}
	dispatch(storePosts(posts));

};

const fetchPostsByCategory = (category) => async dispatch => {
	const responsePosts = await PostsService.getByCategory(category);
	let posts = { posts: responsePosts };
	if (responsePosts.length > 0) {
		posts = normalize(responsePosts, postsListSchema).entities;
	}
	dispatch(storePostsByCategory(posts));
};

const newPostObject = (post) => ({
	'posts': {
		[post.id]: post
	}
});

const createNewPost = (form, path) => async dispatch => {
	const post = await PostsService.create(form);
	if(path === form.category || path === '/')
		dispatch(storePosts(newPostObject(post)));
};

const editPost = (id, infoToUpdate) => async dispatch => {
	const post = await PostsService.update(id, infoToUpdate);
	dispatch(storePosts(newPostObject(post)));
};

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

const updatePostVote = (id, voteType) => async dispatch => {
	const post = await PostsService.updateVote(id, voteType);
	dispatch(voteScoreUpdate(post));
};
const removeFromState = (id) => ({
	type: DELETE_POST,
	payload: id
});

const deletePost = (id) => async dispatch => {
	const post = await PostsService.remove(id);
	dispatch(removeFromState(post.id));
};

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
