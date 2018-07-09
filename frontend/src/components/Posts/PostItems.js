import React from 'react';
import { ListItemSecondaryAction, IconButton, ListItemIcon, ListItemText } from '@material-ui/core';
import { Comment, Menu } from '@material-ui/icons';
import { colors } from '../../utils';
import * as moment from 'moment';

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
	},
	date: {
		width: 150,
		alignSelf: 'flex-start',
		paddingTop: 13,
		textAlign: 'inherit'
	}
};

const PostImage = () => (
	<img
		alt='post' style={styles.img}
		src={require('../assets/post-image.jpg')}
	/>
);

const commentText = (number = 0) => {
	switch (number.toString()) {
		case '0': return 'No comments yet!';
		case '1': return `${number} comment`;
		default: return `${number} comments`;
	}
};

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
			<Menu
				style={{ color: colors.primary }}
			/>
		</IconButton>
	</ListItemSecondaryAction>
);

const PostInfo = ({ title, author, commentCount }) => (
	<div style={styles.info.container}>
		<ListItemText 
			primary={title} 
			secondary={`by: ${author}`} 
		/>
		<CommentCount number={commentCount} />
	</div>
);

const DateInfo = ({ date }) => (
	<ListItemText
		style={styles.date}
		secondary={moment(date).fromNow()}
	/>
);

export { PostImage, CommentCount, MenuListButton, PostInfo, DateInfo };
