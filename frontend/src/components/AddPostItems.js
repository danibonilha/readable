import React from 'react';
import { Button,	TextField, 	MenuItem  } from '@material-ui/core/';

const TitleInput = ({ onChange }) => (
	<TextField
		autoFocus
		margin="dense"
		id="title"
		label="Title"
		type="text"
		fullWidth
		onChange={onChange}
	/>
);

const AuthorInput = ({onChange}) => (
	<TextField
		margin="dense"
		id="author"
		label="Author"
		type="text"
		fullWidth
		onChange={onChange}
	/>
);
const PostBodyInput = ({ onChange }) => (
	<TextField
		margin="dense"
		id="body"
		label="Body"
		type="text"
		multiline
		rows="10"
		fullWidth
		onChange={onChange}
	/>
);

const SelectCategory = ({ current, categories, onChange}) => (
	<TextField
		required
		id="select-currency"
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
