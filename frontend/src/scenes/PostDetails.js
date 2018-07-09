import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper} from '@material-ui/core';
import Vote from '../components/Vote/Vote';
import { Menu } from '../components/Menu/Menu';
import { deletePost, getPost, fetchComments } from '../store/actions';
import { Header } from '../components/Header/Header';
import { CommentCount } from '../components/Posts/PostItems';
import { PostDetailsInfo } from '../components/Posts/PostDetailsItems';
import CommentsList from './../components/Comments/CommentsList';
import AddComment from '../components/Comments/AddComment';

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	secondContainer: 	{
		display: 'flex',
		flexDirection: 'column',
		padding: 10,
		width: '90%',
		alignItems: 'center'
	}
};

class PostDetails extends Component {
	componentDidMount = () => {
		const { match } = this.props;
		this.props.getPost(match.params.id);
		this.props.fetchComments(match.params.id);
	}
	onDeletePost = (id) => {
		this.props.deletePost(id);
	}
	render() {
		const { post } = this.props;
		return (
			<div>
				<Header />
				<Paper elevation={1} style={styles.mainContainer}>					
					<Vote 
						itemId={post.id} 
						voteScore={post.voteScore}/>					
					<div style={styles.secondContainer}>
						<PostDetailsInfo 
							title={post.title}
							author={post.author}
							body={post.body}
						/>
						<CommentCount number={post.commentCount} />
						<AddComment parentId={post.id}/>
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

const mapStateToProps = ({ PostsReducer }, ownProps) => {
	const { posts } = PostsReducer;
	const { id } = ownProps.match.params;
	return {
		post: posts[id] ? posts[id] : {}
	};
};

export default connect(mapStateToProps, { deletePost, getPost, fetchComments })(PostDetails);
