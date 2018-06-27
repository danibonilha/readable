import { STORE_POSTS, UPDATE_VOTESCORE } from '../actions/types';
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
		.then((posts) => {
			const normalizedPosts = normalize(posts, postsListSchema);
			dispatch(
				storePosts(normalizedPosts.entities)
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
export { fetchPosts, updatePostVote };
