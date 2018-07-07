import React from 'react';
import AddPost from './AddPost';
import { SimpleHeader } from './SimpleHeader';

const Header = () => (
	<SimpleHeader>
		<AddPost />
	</SimpleHeader>
);

export { Header };