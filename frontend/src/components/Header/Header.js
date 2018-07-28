import React from 'react';
import AddPost from '../Posts/AddPost';
import SimpleHeader from './SimpleHeader';

const Header = () => (
	<SimpleHeader>
		<AddPost />
	</SimpleHeader>
);

export { Header };