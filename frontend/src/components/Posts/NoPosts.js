import React from 'react';
import AddPost from './AddPost';

const styles = {
	text: {
		textAlign: 'center'
	}
};

const NoPosts = () => (
	<div>
		<h2 style={styles.text}>
			No posts yet!
		</h2>
		<h4 style={styles.text}>
			Click below to add it 
			<AddPost />
		</h4>
	</div>
);

export { NoPosts };
