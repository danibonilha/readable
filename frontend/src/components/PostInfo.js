import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

const PostInfo = ({ title, author }) => (
	<ListItemText primary={title} secondary={`by: ${author}`} />
);

export { PostInfo };
