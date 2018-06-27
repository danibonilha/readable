import React from 'react';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { IconButton, ListItemText } from '@material-ui/core';
import { colors } from '../utils';

const size = 40;
const styles = {
	arrow: {
		fontSize: size,
		color: colors.darkPrimary
	},
	icon: {
		width: size,
		height: size
	},
	text: {
		padding: 0
	}
};

const VoteUp = ({ onClick }) =>  (
	<IconButton
		style={styles.icon}
		aria-label="Vote Up"
		onClick={onClick}
	>
		<ArrowDropUp style={styles.arrow} />
	</IconButton>
			
);

const VoteDown = ({ onClick }) => (
	<IconButton
		style={styles.icon}
		aria-label="Vote Down"
		onClick={onClick}
	>
		<ArrowDropDown style={styles.arrow} />
	</IconButton>

); 

const VoteScore = ({ voteScore }) => (
	<ListItemText
		style={styles.text}
		secondary={voteScore}
	/>
); 

export { VoteUp, VoteDown, VoteScore };
