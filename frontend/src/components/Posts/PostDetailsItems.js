import React from 'react';
import { Typography } from '@material-ui/core';
import { BackButton } from '../common/BackButton';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinIcon, LinkedinShareButton } from 'react-share';

const styles = {
	container: {
		width: '80%',
		alignSelf: 'center'
	},
	title: { margin: 10 },
	author: { margin: 5 },
	body: { margin: 20 },
	backContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center' }
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

const BackAndShare = ({ backTo, url }) => (
	<div style={styles.backContainer}>
		<BackButton to={backTo} />
		<TwitterShareButton url={url}>
			<TwitterIcon
				size={32}
				round 
			/>
		</TwitterShareButton>
		<FacebookShareButton url={url}>
			<FacebookIcon
				size={32}
				round 
			/>
		</FacebookShareButton>
		<LinkedinShareButton url={url}>
			<LinkedinIcon
				size={32}
				round 
			/>
		</LinkedinShareButton>
	</div>
);

export { PostDetailsInfo, BackAndShare };
