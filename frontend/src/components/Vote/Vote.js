import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { updatePostVote, updateCommentVote } from '../../store/actions';
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
	static defaultProps = {
		comment: false
	};

	handleUpVote = () => {
		const { itemId, comment, updatePostVote, updateCommentVote } = this.props;
		if (comment) {
			updateCommentVote(itemId, 'upVote');
		}
		else {
			updatePostVote(itemId, 'upVote');
		}
	}
	handleDownVote = () => {
		const { itemId, comment, updatePostVote, updateCommentVote } = this.props;
		if (comment) {
			updateCommentVote(itemId, 'downVote');
		}
		else {
			updatePostVote(itemId, 'downVote');
		}
	}
	render() {
		return (
			<div className={this.props.classes.container}>
				<VoteUp onClick={this.handleUpVote} />
				<VoteScore voteScore={this.props.voteScore} />
				<VoteDown onClick={this.handleDownVote} />
			</div>
		);
	}
}

export default injectSheet(styles)(connect(null, { updatePostVote, updateCommentVote })(Vote));
