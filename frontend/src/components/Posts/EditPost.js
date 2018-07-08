import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@material-ui/core/';
import PostForm from './PostForm';
import { editPost } from '../../store/actions';

class EditPost extends Component {

	handleEdit = form => e => {	
		e.preventDefault();
		const { post, editPost } = this.props;	
		const infoToUpdate = {
			title: form.title,
			body: form.body
		};
		editPost(post.id, infoToUpdate);
	}

	render() {
		const { open, handleClose, post } = this.props;
		return (
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<PostForm
						title={post.title}
						author={post.author}
						body={post.body}
						category={post.category}
						handleSubmit={this.handleEdit}
						onClose={handleClose}
						editing
					/>
				</Dialog>
			</div>
		);
	}
}


export default connect(null, { editPost })(EditPost);