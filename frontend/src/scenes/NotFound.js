import React from 'react';
import { SimpleHeader } from '../components/Header/SimpleHeader';

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	textContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		border: 'dashed',
		padding: 50,
		alignSelf: 'center',
		color: 'dimgray',
		margin: 50
	},
	msgText: {
		textAlign: 'center'
	}
};

const NotFound = () => (
	<div style={styles.mainContainer}>
		<SimpleHeader />
		<div style={styles.textContainer}>
			<h1>
				<span
					role="img"
					aria-label='surprised face'>
					😦
				</span>
			</h1>
			<h1>404</h1>
			<h1 style={styles.msgText}>
				Page not found!
			</h1>
		</div>
	</div>
);

export { NotFound };
