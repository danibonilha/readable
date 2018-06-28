import React from 'react';
import { ListItem } from '@material-ui/core';
import Link from 'react-router-dom/Link';
import { PostImage, MenuListButton, PostInfo } from './PostItems';


const styles = {
	link: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		textDecoration: 'none',
		width: '100%'
	}
};

const PostPreview = ({ post, onMenuClick }) => (
	<ListItem button divider >
		<Link style={styles.link}
			to={`/${post.category}/${post.id}`}>
			<PostImage />
			<PostInfo
				title={post.title}
				author={post.author}
				commentCount={post.commentCount}
			/>
		</Link>
		<MenuListButton onClick={onMenuClick} />
	</ListItem>
);

export { PostPreview };

