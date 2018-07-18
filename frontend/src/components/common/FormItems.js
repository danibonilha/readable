import React from 'react';
import { Button,	TextField, 	MenuItem  } from '@material-ui/core/';

const Input = ({ tag, value, onChange }) => (
	<TextField
		autoFocus
		margin="dense"
		id={tag}
		label={tag}
		type="text"
		value={value}	
		onChange={onChange}	
		fullWidth
		multiline={tag === 'Body' ? true : false}
		rows={tag === 'Body' ? '10' : '1'}
	/>
);


const SelectCategory = ({ current, categories, onChange}) => (
	<TextField
		required
		id="select-category"
		select
		label="Category"
		value={current}
		onChange={onChange}
		helperText="Please select one category"
		margin="dense"
	>
		{categories.map(category => (
			<MenuItem key={category.name} value={category.name}>
				{category.name}
			</MenuItem>
		))}
	</TextField>
);

const CancelButton = ({ onClick }) => (
	<Button onClick={onClick} color="primary">
		Cancel
	</Button>
);

const PostButton = ({ onClick }) => (
	<Button type='submit' onClick={onClick} color="primary">
		Post
	</Button>
);

export { Input, SelectCategory, PostButton, CancelButton };
