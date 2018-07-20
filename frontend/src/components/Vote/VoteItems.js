import React from 'react';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { IconButton, ListItemText } from '@material-ui/core';
import { colors } from '../../utils';

const size = 40;
const styles = {
	arrow: {
		fontSize: size,
		color: colors.primary
	},
	icon: {
		width: size,
		height: size
	},
	text: {
		padding: 0
	}
};

const VoteButton = ({ onClick, type, children }) => (
	<IconButton
		style={styles.icon}
		aria-label={type}
		onClick={onClick}
	>
		{children}
	</IconButton>
);

const VoteUp = ({ onClick }) => (
	<VoteButton
		type="Vote Up"
		onClick={onClick}>
		<ArrowDropUp style={styles.arrow} />
	</VoteButton >
);

const VoteDown = ({ onClick }) => (
	<VoteButton
		type="Vote Down"
		onClick={onClick}>
		<ArrowDropDown style={styles.arrow} />
	</VoteButton >
);

const VoteScore = ({ voteScore }) => (
	<ListItemText
		style={styles.text}
		secondary={voteScore}
	/>
);

export { VoteUp, VoteDown, VoteScore };
