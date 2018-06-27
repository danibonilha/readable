
import React from 'react';
import { List, ListItem } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { EditItem, DeleteItem } from './MenuItems';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: 10,
		padding: 10,
		alignContent: 'space-around',
	}
};

const Menu = ({ open, edit, remove }) => (
	<Collapse in={open} timeout="auto" unmountOnExit>
		<List component="div">
			<ListItem style={styles.container}>
				<EditItem onClick={edit} />
				<DeleteItem onClick={remove} />
			</ListItem>
		</List>
	</Collapse>
);

export { Menu };
