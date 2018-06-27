import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import Link from 'react-router-dom/Link';
import Vote from './Vote'
import { PostInfo } from './PostInfo'

const styles = {
  container: { 
    display: "flex", 
    flexDirection: "row", 
    alignItems: 'center' 
  },
  img: { 
    width: 110, 
    height: 65,
     borderRadius: 8 
    },
  link: { 
    display: "flex", 
    flexDirection: "row", 
    textDecoration: 'none'    
  }
}

class PostsList extends Component {
  render() {
    return (
      <List>
        {this.props.posts.map(post => (
          <div key={post.id} style={styles.container}>
            <Vote itemId={post.id} voteScore={post.voteScore} />
            <ListItem button divider >
              <Link
                to={`/posts/${post.category}/${post.id}`}
                style={styles.link}>
                <img 
                  alt='post' style={styles.img} 
                  src={require('./assets/post-image.jpg')}                   
                  />
                <PostInfo 
                  title={post.title} 
                  author={post.author} 
                />
              </Link>
            </ListItem>
          </div>
        ))}
      </List>
    );
  }
}

const mapStateToProps = ({ PostsReducer }) => {
  const { posts } = PostsReducer;
  return {
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps, null)(PostsList)
