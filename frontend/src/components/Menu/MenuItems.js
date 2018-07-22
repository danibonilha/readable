import React from 'react';
import { IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { colors } from '../../utils';

const iconSize = 25;
const styles = {
	iconButton: {
		width: iconSize,
		height: iconSize,
	},
	icon: {
		fontSize: 20
	},
	edit: {
		marginBottom: 8
	},
	editColor: {
		color: colors.darkPrimary
	},
	deleteColor: {
		color: colors.delete
	}
};

const Button = ({ styles = {}, children, onClick, type }) => (
	<IconButton
		aria-label={type}
		onClick={onClick}
		style={{ ...styles.iconButton, ...styles }}
	>
		{children}
	</IconButton>
);

const EditItem = ({ onClick }) => (
	<Button
		type="Edit"
		onClick={onClick}
		styles={styles.edit}
	>
		<Edit
			style={{
				...styles.icon,
				...styles.editColor
			}}
		/>
	</Button>
);

const DeleteItem = ({ onClick }) => (
	<Button type="Delete" onClick={onClick} >
		<Delete
			style={{
				...styles.icon,
				...styles.deleteColor
			}}
		/>
	</Button>
);

export { EditItem, DeleteItem };
