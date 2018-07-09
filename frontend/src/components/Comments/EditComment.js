import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@material-ui/core/';
import { editComment } from '../../store/actions';
import CommentForm from './CommentForm';

class EditComment extends Component {
	handleEdit = form => e => {	
		e.preventDefault();
		const { comment, editComment } = this.props;	
		const infoToUpdate = {
			body: form.body
		};
		editComment(comment.id, infoToUpdate);
	}

	render() {
		const { open, handleClose, comment } = this.props;
		return (
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<CommentForm
						body={comment.body}
						handleSubmit={this.handleEdit}
						onClose={handleClose}
						editing
					/>
				</Dialog>
			</div>
		);
	}
}

export default connect(null, { editComment })(EditComment);
