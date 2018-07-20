import React from 'react';
import { ListItemText } from '@material-ui/core';
import * as moment from 'moment';

const styles = {
	date: {
		width: 'fit-content',
		alignSelf: 'flex-start',
		paddingTop: 5,
		textAlign: 'center',
		paddingRight: 25
	}
};

const DateInfo = ({ date }) => (
	<ListItemText
		style={styles.date}
		secondary={moment(date).fromNow()}
	/>
);

export { DateInfo };
