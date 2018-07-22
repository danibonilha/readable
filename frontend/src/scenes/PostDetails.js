import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import Vote from '../components/Vote/Vote';
import { Menu } from '../components/Menu/Menu';
import {
	deletePost,
	getPost,
	fetchComments,
	createNewComment,
	resetInitialState,
	getCategories
} from '../store/actions';
import { Header } from '../components/Header/Header';
import { CommentCount } from '../components/Posts/PostItems';
import { PostDetailsInfo } from '../components/Posts/PostDetailsItems';
import CommentsList from './../components/Comments/CommentsList';
import AddComment from '../components/Comments/AddComment';
import { NotFound } from './NotFound';

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	secondContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: 10,
		width: '90%',
		alignItems: 'center'
	}
};

class PostDetails extends Component {
	constructor(props) {
		super(props);
		this.props.resetInitialState();
	}
	componentDidMount = () => {
		const { match, getPost, fetchComments, getCategories } = this.props;
		const { id } = match.params;
		getPost(id)
			.then(() => fetchComments(id))
			.catch((err) => console.log(err));
		getCategories();	
	}

	onDeletePost = (id) => {
		const { deletePost, history } = this.props;
		deletePost(id);
		history.replace('/');
	}

	render() {
		const { post, commentsCount, postNotFound } = this.props;
		if (postNotFound) {
			return (
				<NotFound />
			);
		}
		return (
			<div>
				<Header />
				<Paper elevation={1} style={styles.mainContainer}>
					<Vote
						itemId={post.id}
						voteScore={post.voteScore}
					/>
					<div style={styles.secondContainer}>
						<PostDetailsInfo
							title={post.title}
							author={post.author}
							body={post.body}
						/>
						<CommentCount number={commentsCount} />
						<AddComment parentId={post.id} />
					</div>
					<Menu
						open={true}
						remove={(e) => this.onDeletePost(post.id, e)}
						postToEdit={post}
					/>
				</Paper>
				<CommentsList />
			</div>
		);
	}
}

const mapStateToProps = ({ PostsReducer, CommentsReducer }, ownProps) => {
	const { posts, hasErrored } = PostsReducer;
	const { comments } = CommentsReducer;
	const { id } = ownProps.match.params;
	return {
		post: posts[id] ? posts[id] : {},
		commentsCount: Object.keys(comments).length,
		postNotFound: hasErrored
	};
};

export default connect(mapStateToProps, {
	deletePost,
	getPost,
	fetchComments,
	createNewComment, 
	resetInitialState,
	getCategories
})(PostDetails);
