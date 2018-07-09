import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewComment } from '../../store/actions';
import { NewItemDialog } from '../NewItemDialog';
import CommentForm from './CommentForm';

class AddPost extends Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};

	handleSubmit = form => e => {
		e.preventDefault();
		const { parentId, createNewComment } = this.props;
		createNewComment(form, parentId);
	}

	render() {
		return (
			<NewItemDialog
				open={this.state.open}
				buttonName="New Comment"
				onClick={this.handleClickOpen}
				onClose={this.handleClose}
			>
				<CommentForm
					handleSubmit={this.handleSubmit}
					onClose={this.handleClose}
				/>
			</NewItemDialog>
		);
	}
}

export default connect(null, { createNewComment })(AddPost);
