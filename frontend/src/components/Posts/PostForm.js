import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DialogActions, DialogContent, DialogContentText } from '@material-ui/core/';
import { Input, SelectCategory, PostButton, CancelButton } from '../common/FormItems';

class PostForm extends Component {
	static defaultProps = {
		title: '',
		author: '',
		body: '',
		category: '',
		editing: false
	};
	state = {
		showSubmit: false,
		form: {
			title: this.props.title,
			author: this.props.author,
			body: this.props.body,
			category: this.props.category
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
		const { category } = this.state.form;
		if ((input === 'category' && value !== '') || category !== '') {
			this.setState({
				showSubmit: true
			});
		}
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.state.form)}>
				<DialogContent>
					<DialogContentText>
						Have fun sharing your knowledge with others. =)
					</DialogContentText>
					<Input
						tag='Title'
						value={this.state.form.title}
						onChange={this.handleChange('title')}
					/>
					{!this.props.editing &&
						<Input
							tag='Author'
							value={this.state.form.author}
							onChange={this.handleChange('author')}
						/>}
					<Input
						tag='Body'
						value={this.state.form.body}
						onChange={this.handleChange('body')}
					/>
					{!this.props.editing &&
						<SelectCategory
							categories={this.props.categories}
							current={this.state.form.category}
							onChange={this.handleChange('category')}
						/>}
				</DialogContent>
				<DialogActions>
					<CancelButton onClick={this.props.onClose} />
					{this.state.showSubmit &&
						<PostButton
							type='submit'
							onClick={this.props.onClose}
						/>}
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
