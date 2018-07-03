import React from 'react';
import { colors } from '../utils';
import AddPost from './AddPost';

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

const Header = () =>(
	<div style={styles.container}>
		<h1 style={styles.title}>Readable</h1>
		<AddPost />		
	</div>
);

export { Header};