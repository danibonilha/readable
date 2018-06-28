import React from 'react';
import { ListItemSecondaryAction, IconButton, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Comment } from '@material-ui/icons';
import { colors } from '../utils';

const styles = {
	img: {
		width: 150,
		height: 100,
		borderRadius: 8
	},
	comment: {
		container: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center'
		},
		icon: {
			margin: 0,
			padding: 0,
			fontSize: 15,
			color: '#4CAF50'
		},
		text: {
			padding: 0,
			paddingTop: 10,
			paddingLeft: 3
		}
	},
	info: {
		container: { 
			marginLeft: 10 
		}
	}
};

const PostImage = () => (
	<img
		alt='post' style={styles.img}
		src={require('./assets/post-image.jpg')}
	/>
);

const commentText = (number) => (
	number > 0
		? `${number} comments`
		: 'No comments yet!'
);

const CommentCount = ({ number }) => (
	<div style={styles.comment.container}>
		<ListItemIcon>
			<Comment style={styles.comment.icon} />
		</ListItemIcon>
		<ListItemText
			style={styles.comment.text}
			secondary={commentText(number)}
		/>
	</div>
);

const MenuListButton = ({ onClick }) => (
	<ListItemSecondaryAction>
		<IconButton
			aria-label="Menu"
			onClick={onClick}
		>
			<MenuIcon 
				style={{ color: colors.primary }}
			/>
		</IconButton>
	</ListItemSecondaryAction>
);



const PostInfo = ({ title, author, commentCount }) => (
	<div style={styles.info.container}>
		<ListItemText primary={title} secondary={`by: ${author}`} />
		<CommentCount number={commentCount} />
	</div>
);


export { PostImage, CommentCount, MenuListButton, PostInfo };

