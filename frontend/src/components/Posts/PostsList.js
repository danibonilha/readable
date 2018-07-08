import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import Vote from '../Vote/Vote';
import { PostPreview } from './PostPreview';
import { Menu } from '../Menu/Menu';
import { deletePost } from '../../store/actions';
import OrderBy from './OrderBy';
import { sortBy } from '../../utils';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	}
};

class PostsList extends Component {
	state = {
		menuOpen: false
	};

	handleClick = () => {
		this.setState(prevState => ({
			menuOpen: !prevState.menuOpen
		}));
	};
	handleClose = () => {
		this.setState({ editOpen: false });
	};

	onDeletePost = (id) => {
		this.props.deletePost(id);
	}
	render() {
		return (
			<div>
				<OrderBy />
				<List>
					{this.props.posts.length > 0 ?
						this.props.posts.map(post => (
							<div key={post.id} style={styles.container}>
								<Vote itemId={post.id} voteScore={post.voteScore} />
								<PostPreview post={post} onMenuClick={this.handleClick} />
								<Menu
									open={this.state.menuOpen}
									remove={(e) => this.onDeletePost(post.id, e)}
									postToEdit={post}
								/>
							</div>
						)) :
						<p>No Posts Found!</p>}
				</List>
			</div>
		);
	}
}

const mapStateToProps = ({ PostsReducer }) => {
	const { posts, sortType } = PostsReducer;
	return {
		posts: sortBy(sortType, Object.values(posts))
	};
};

export default connect(mapStateToProps, { deletePost })(PostsList);
