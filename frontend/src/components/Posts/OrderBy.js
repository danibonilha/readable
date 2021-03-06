import React, { Component } from 'react';
import { MenuItem, TextField } from '@material-ui/core/';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { setSortBy } from '../../store/actions';

const styles = {
	container: {
		padding: 5,
		display: 'flex',
		justifyContent: 'center'
	}
};

class OrderBy extends Component {
	handleChange = event => {
		this.props.setSortBy(event.target.value);
	};
	
	render() {
		return (
			<div className={this.props.classes.container}>
				<TextField
					style={{ textAlign: 'center' }}
					id="select-order"
					select
					label="Order by"
					value={this.props.sortType}
					onChange={this.handleChange}
					fullWidth
				>
					<MenuItem value="date" >Date</MenuItem>
					<MenuItem value="votes">Votes </MenuItem>
				</TextField>
			</div>
		);
	}
}

const mapStateToProps = ({ PostsReducer }) => {
	const { sortType } = PostsReducer;
	return {
		sortType
	};
};

export default injectSheet(styles)(connect(mapStateToProps, { setSortBy })(OrderBy));