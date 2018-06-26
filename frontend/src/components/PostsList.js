import React from 'react';
import { PostInfo } from './PostInfo'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'react-router-dom/Link';

const PostsList = (props) => (
  <List>
    {props.posts.map(post => (
      <Link 
        to={`/posts/${post.category}/${post.id}`} 
        style={{ textDecoration: 'none' }}>
        <ListItem button divider key={post.id}>
          <PostInfo title={post.title} author={post.author} />
        </ListItem>
      </Link>
    ))}
  </List>
);

export { PostsList }