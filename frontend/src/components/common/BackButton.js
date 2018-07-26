import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';

const BackButton = ({ onClick }) => (
	<IconButton
		aria-label="Back"
		onClick={onClick}
	>
		<ArrowBack />
	</IconButton>
);

export { BackButton };
