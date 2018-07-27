import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const BackButton = ({ to, onClick }) => (
	<Link to={to}>
		<IconButton
			aria-label="Back"
			onClick={onClick}
		>
			<ArrowBack />
		</IconButton>
	</Link>
);

export { BackButton };
