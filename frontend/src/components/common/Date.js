import React from 'react';
import { ListItemText } from '@material-ui/core';
import * as moment from 'moment';
import injectSheet from 'react-jss';

const styles = {
	date: {
		width: 'fit-content',
		alignSelf: 'flex-start',
		paddingTop: 5,
		textAlign: 'center',
		paddingRight: 25
	}
};

const DateInfo = ({ date, classes }) => (
	<ListItemText
		className={classes.date}
		secondary={moment(date).fromNow()}
	/>
);

export default injectSheet(styles)(DateInfo);
