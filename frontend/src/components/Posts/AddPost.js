import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { createNewPost } from '../../store/actions';
import { NewItemDialog } from '../common/NewItemDialog';

class AddPost extends Component {
	state = {
		open: false
	};

	handleClickOpen = () => this.setState({ open: true });
	
	handleClose = () => this.setState({ open: false });

	handleSubmit = form => e => {
		e.preventDefault();
		this.props.createNewPost(form);
	}

	render() {
		return (
			<NewItemDialog
				open={this.state.open}
				buttonName="New Post"
				onClick={this.handleClickOpen}
				onClose={this.handleClose}
			>
				<PostForm
					handleSubmit={this.handleSubmit}
					onClose={this.handleClose}
				/>
			</NewItemDialog>
		);
	}
}

export default connect(null, { createNewPost })(AddPost);
