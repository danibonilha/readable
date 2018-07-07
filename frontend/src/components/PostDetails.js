import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper} from '@material-ui/core';
import Vote from './Vote';
import { Menu } from './Menu';
import { deletePost, getPost } from '../store/actions';
import { Header } from './Header';
import { CommentCount } from './PostItems';
import { PostDetailsInfo } from './PostDetailsItems';

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
					</div>					
					<Menu
						open={true}
						remove={(e) => this.onDeletePost(post.id, e)}
						postToEdit={post}
					/>
				</Paper>
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

export default connect(mapStateToProps, { deletePost, getPost })(PostDetails);
