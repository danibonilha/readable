import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import injectSheet from 'react-jss';
import Vote from '../Vote/Vote';
import Menu from '../Menu/Menu';
import { fetchComments, deleteComment } from '../../store/actions';
import { Comment } from './Comment';
import { sortBy } from '../../utils';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	list: {
		display: 'flex',
		justifyContent: 'center'
	}
};

class CommentsList extends Component {
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

	onDeleteComment = (id) => {
		this.props.deleteComment(id);
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.list}>
				<List>
					{this.props.comments.length > 0 &&
						this.props.comments.map(comment => (
							<div key={comment.id} className={classes.container}>
								<Vote
									itemId={comment.id}
									comment={true}
									voteScore={comment.voteScore} />
								<Comment comment={comment} />
								<Menu
									open={true}
									remove={(e) => this.onDeleteComment(comment.id, e)}
									commentToEdit={comment}
								/>
							</div>
						))}
				</List>
			</div>
		);
	}
}

const mapStateToProps = ({ CommentsReducer }) => {
	const { comments } = CommentsReducer;
	return {
		comments: sortBy('votes', Object.values(comments))
	};
};

export default injectSheet(styles)(connect(mapStateToProps, {
	fetchComments,
	deleteComment
})(CommentsList));