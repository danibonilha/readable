import React, { Component } from 'react';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { IconButton, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { updatePostVote } from '../store/actions'

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    paddingLeft: 10
  },
  arrow: {
    fontSize: 30,
    color: '#00796B'
  },
  icon: {
    width: 30,
    height: 30
  },
  text: {
    paddingLeft: 0,
    paddingRight: 0
  }
}

class Vote extends Component {
  handleUpVote = () => {
    this.props.updatePostVote(this.props.itemId, 'upVote');
  }
  handleDownVote = () => {
    this.props.updatePostVote(this.props.itemId, 'downVote');
  }

  render() {
    return (
      <div style={styles.container}>
        <IconButton
          style={styles.icon}
          aria-label="Vote Up"
          onClick={this.handleUpVote}
        >
          <ArrowDropUp style={styles.arrow} />
        </IconButton>
        <ListItemText
          style={styles.text}
          secondary={this.props.voteScore}
        />
        <IconButton
          style={styles.icon}
          aria-label="Vote Down"
          onClick={this.handleDownVote}
        >
          <ArrowDropDown style={styles.arrow} />
        </IconButton>
      </div>
    );
  }
}

export default connect(null, { updatePostVote })(Vote)
