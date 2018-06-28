import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core/';
import PostForm from './PostForm';
import { createNewPost } from '../store/actions';

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
		this.props.createNewPost(form);
	}

	render() {
		return (
			<div>
				<Button onClick={this.handleClickOpen}>New Post</Button>			
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>	
					<PostForm 
						handleSubmit={this.handleSubmit} 
						onClose={this.handleClose}
					/>
				</Dialog>	
			</div>
		);
	}
}


export default connect(null, { createNewPost })(AddPost);