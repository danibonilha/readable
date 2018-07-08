import React from 'react';
import { Button,	TextField, 	MenuItem  } from '@material-ui/core/';

const TitleInput = ({ value, onChange }) => (
	<TextField
		autoFocus
		margin="dense"
		id="title"
		label="Title"
		type="text"
		value={value}
		fullWidth
		onChange={onChange}
	/>
);

const AuthorInput = ({ value, onChange }) => (
	<TextField
		margin="dense"
		id="author"
		label="Author"
		type="text"
		fullWidth
		value={value}
		onChange={onChange}
	/>
);
const PostBodyInput = ({ value, onChange }) => (
	<TextField
		margin="dense"
		id="body"
		label="Body"
		type="text"
		multiline
		rows="10"
		fullWidth
		value={value}
		onChange={onChange}
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

export { TitleInput, AuthorInput, PostBodyInput, SelectCategory, PostButton, CancelButton };
