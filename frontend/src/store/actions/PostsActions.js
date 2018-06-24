import { STORE_POSTS } from '../actions/types';
import { PostsService } from './../../services';

const storePosts = (posts) => ({
    type: STORE_POSTS, 
    payload: posts
})

export const fetchPosts = () => dispatch => (
  PostsService.getAll()
    .then((posts) => dispatch(storePosts(posts)))
)