import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { DateInfo } from '../Posts/PostItems';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'right',
	}
};

const Comment = ({ comment }) => (
	<ListItem divider style={styles.container}>
		<DateInfo date={comment.timestamp}/>
		<CommentInfo
			body={comment.body}
			author={comment.author}
		/>
	</ListItem>
);

const CommentInfo = ({ body, author }) => (
	<div style={{ marginTop: 10}}>
		<ListItemText
			primary={body}
			secondary={`by: ${author}`}
		/>
	</div>
);

export { Comment };