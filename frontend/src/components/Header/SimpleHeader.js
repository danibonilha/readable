import React from 'react';
import injectSheet from 'react-jss';
import { colors } from '../../utils';

const styles = {
	container: {
		paddingTop: 20,
		background: colors.darkPrimary,
		textAlign: 'center'
	},
	title: {
		fontWeight: 600,
		margin: 0,
		color: 'white',
		paddingBottom: 10
	}
};

const SimpleHeader = ({ children, classes }) => (
	<div className={classes.container}>
		<h1
			className={classes.title}
		>
			Readable
		</h1>
		{children}
	</div>
);

export default injectSheet(styles)(SimpleHeader);
