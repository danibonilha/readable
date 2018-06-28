import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import CategoryReducer from './CategoryReducer';

export default combineReducers({
	PostsReducer,
	CategoryReducer

});