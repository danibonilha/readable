import React from 'react';
import { IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { colors } from '../utils';

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


const EditItem = ({ onClick }) => (
	<IconButton
		aria-label="Edit"
		onClick={onClick}
		style={{...styles.iconButton, ...styles.edit}}
	>
		<Edit 
			style={{...styles.icon, ...styles.editColor}}
		/>
	</IconButton>
);


const DeleteItem = ({ onClick }) => (
	<IconButton
		aria-label="Delete"
		onClick={onClick}
		style={styles.iconButton}
	>
		<Delete 
			style={{...styles.icon, ...styles.deleteColor}} 
		/>
	</IconButton>
);


export { EditItem, DeleteItem };
