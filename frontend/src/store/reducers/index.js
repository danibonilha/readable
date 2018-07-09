import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import CategoryReducer from './CategoryReducer';
import CommentsReducer from './CommentsReducer';

export default combineReducers({
	PostsReducer,
	CategoryReducer,
	CommentsReducer
});
