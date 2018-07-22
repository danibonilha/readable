import React, { Component } from 'react';
import { DialogActions, DialogContent } from '@material-ui/core/';
import { Input, PostButton, CancelButton } from '../common/FormItems';

class CommentForm extends Component {
	static defaultProps = {
		author: '',
		body: '',
		editing: false
	};
	state = {
		form: {
			author: this.props.author,
			body: this.props.body,
		}
	};

	handleChange = input => e => {
		e.preventDefault();
		const { value } = e.target;
		this.setState({
			form: {
				...this.state.form,
				[input]: value
			},
		});
	};
	
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.state.form)}>
				<DialogContent>
					{!this.props.editing &&
						<Input
							tag="Author"
							value={this.state.form.author}
							onChange={this.handleChange('author')}
						/>}
					<Input
						tag='Body'
						value={this.state.form.body}
						onChange={this.handleChange('body')}
					/>
				</DialogContent>
				<DialogActions>
					<CancelButton onClick={this.props.onClose} />
					<PostButton
						type='submit'
						onClick={this.props.onClose}
					/>
				</DialogActions>
			</form>
		);
	}
}

export default CommentForm;
