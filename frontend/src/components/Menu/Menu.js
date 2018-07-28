import React, { Component } from 'react';
import { List, ListItem, Collapse } from '@material-ui/core';
import injectSheet from 'react-jss';
import { EditItem, DeleteItem } from './MenuItems';
import EditPost from '../Posts/EditPost';
import EditComment from './../Comments/EditComment';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: 10,
		padding: 10,
		alignContent: 'space-around',
	}
};

class Menu extends Component {
	state = {
		open: false
	}
	
	handleOpen = () => this.setState({ open: true })

	handleClose = () => this.setState({ open: false })

	render() {
		const { open, remove, postToEdit, commentToEdit, classes } = this.props;
		return (
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div">
					<ListItem className={classes.container}>
						<EditItem onClick={this.handleOpen} />
						<DeleteItem onClick={remove} />
					</ListItem>
					{postToEdit && !commentToEdit &&
						<EditPost
							open={this.state.open}
							handleClose={this.handleClose}
							post={postToEdit}
						/>}
					{commentToEdit && !postToEdit &&
						<EditComment
							open={this.state.open}
							handleClose={this.handleClose}
							comment={commentToEdit}
						/>}
				</List>
			</Collapse>
		);
	}
}
export default injectSheet(styles)(Menu);
