import React from 'react';

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
			Click on New Post above to add it.
		</h4>
	</div>
);

export { NoPosts };
