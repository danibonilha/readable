import React from 'react';
import { Typography } from '@material-ui/core';

const styles = {
	container: {
		width: '80%',
		alignSelf: 'center'
	},
	title: { margin: 10 },
	author: { margin: 5 },
	body: { margin: 20 }
};

const PostDetailsInfo = ({ title, author, body }) => (
	<div style={styles.container}>
		<PostTitle title={title} />
		<PostAuthor author={author} />
		<PostBody body={body} />
	</div>
);

const PostTitle = ({ title }) => (
	<Typography
		style={styles.title}
		align='center'
		variant="headline"
		component="h3"
	>
		{title}
	</Typography>
);

const PostAuthor = ({ author }) => (
	<Typography
		style={styles.author}
		align='center'
		component="h6"
	>
		Author: {author}
	</Typography>
);

const PostBody = ({ body }) => (
	<Typography
		style={styles.body}
		align='center'
		component="p"
	>
		{body}
	</Typography>
);


export { PostDetailsInfo };
