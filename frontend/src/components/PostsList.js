import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import Vote from './Vote';
import { PostPreview } from './PostPreview';
import { Menu } from './Menu';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	}
};

class PostsList extends Component {

	state = { menuOpen: false };

	handleClick = () => {
		this.setState(prevState => ({
			menuOpen: !prevState.menuOpen
		}));
	};
	render() {
		return (
			<List>
				{this.props.posts.map(post => (
					<div key={post.id} style={styles.container}>
						<Vote itemId={post.id} voteScore={post.voteScore} />
						<PostPreview post={post} onMenuClick={this.handleClick} />
						<Menu open={this.state.menuOpen} />
					</div>
				))}
			</List>
		);
	}
}

const mapStateToProps = ({ PostsReducer }) => {
	const { posts } = PostsReducer;
	return {
		posts: Object.values(posts)
	};
};

export default connect(mapStateToProps, null)(PostsList);
