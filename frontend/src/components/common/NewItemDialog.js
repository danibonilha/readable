import React from 'react';
import { Button, Dialog } from '@material-ui/core/';

const NewItemDialog = ({
	open,
	onClick,
	onClose,
	buttonName,
	children
}) => (
	<div>
		<Button onClick={onClick} >
			{buttonName}
		</Button>
		<Dialog
			open={open}
			aria-labelledby="form-dialog-title"
			onClose={onClose}
		>
			{children}
		</Dialog>
	</div>
);

export { NewItemDialog };
