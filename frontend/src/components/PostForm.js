import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';
import { TitleInput, AuthorInput, PostBodyInput, SelectCategory, PostButton, CancelButton } from './AddPostItems';

class PostForm extends Component {
	state = {
		showSubmit: false,
		form: {
			title: '',
			author: '',
			body: '',
			category: ''
		}
		,
	};

	handleChange = input => e => {
		e.preventDefault();
		const { value } = e.target;
		this.setState({
			form: {
				...this.state.form,
				[input]: e.target.value
			},
		});
		if (input === 'category' && value !== '') {
			this.setState({
				showSubmit: true
			});
		}
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.state.form)}>
				<DialogTitle id="form-dialog-title">Write!</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Have fun sharing your knowledge with others. =)
					</DialogContentText>
					<TitleInput onChange={this.handleChange('title')} />
					<AuthorInput onChange={this.handleChange('author')} />
					<PostBodyInput onChange={this.handleChange('body')} />
					<SelectCategory
						categories={this.props.categories}
						current={this.state.form.category}
						onChange={this.handleChange('category')} />
				</DialogContent>
				<DialogActions>
					<CancelButton onClick={this.props.onClose} />
					{this.state.showSubmit &&
						<PostButton type='submit' onClick={this.props.onClose}/>}
				</DialogActions>
			</form>
		);
	}
}

const mapStateToProps = ({ CategoryReducer }) => {
	const { categories } = CategoryReducer;
	return {
		categories
	};
};

export default connect(mapStateToProps, null)(PostForm);