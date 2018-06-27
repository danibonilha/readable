import { STORE_POSTS, UPDATE_VOTESCORE, DELETE_POST } from '../actions/types';
import { PostsService } from './../../services';
import { normalize, schema } from 'normalizr';

const postsSchema = new schema.Entity('posts');
const postsListSchema = [postsSchema];

const storePosts = (posts) => ({
	type: STORE_POSTS,
	payload: posts
});

const fetchPosts = () => dispatch => (
	PostsService.getAll()
		.then((responsePosts) => {
			let posts = { posts: responsePosts };
			if (responsePosts.length > 0) {
				posts = normalize(responsePosts, postsListSchema).entities;
			}
			dispatch(
				storePosts(posts)
			);
		})
);

const voteScoreUpdate = (post) => ({
	type: UPDATE_VOTESCORE,
	payload: post
});

const updatePostVote = (id, voteType) => dispatch => (
	PostsService.updateVote(id, voteType)
		.then((post) => dispatch(
			voteScoreUpdate(post)
		))
);
const removeFromState = (id) => ({
	type: DELETE_POST,
	payload: id
});

const deletePost = (id) => dispatch => (
	PostsService.remove(id)
		.then((post) => dispatch(
			removeFromState(post.id)
		))
);

export { fetchPosts, updatePostVote, deletePost };
