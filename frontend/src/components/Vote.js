import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePostVote } from '../store/actions';
import { VoteDown, VoteUp, VoteScore } from './VoteItems';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingLeft: 10
	}
};

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
				<VoteUp onClick={this.handleUpVote} />
				<VoteScore voteScore={this.props.voteScore}/>
				<VoteDown onClick={this.handleDownVote}/>
			</div>
		);
	}
}

export default connect(null, { updatePostVote })(Vote);
