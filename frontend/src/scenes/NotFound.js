import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { setCategory } from '../store/actions';
import SimpleHeader from '../components/Header/SimpleHeader';
import { BackButton } from '../components/common/BackButton';


const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	textContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		border: 'dashed',
		padding: 50,
		alignSelf: 'center',
		color: 'dimgray',
		margin: 50
	},
	msgText: {
		textAlign: 'center'
	}
};


class NotFound extends Component {
	handleBackButton = () => {
		const { setCategory, showPostsOnBack } = this.props;
		setCategory('all');
		!!showPostsOnBack && showPostsOnBack('all');
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.mainContainer}>
				<SimpleHeader />
				<BackButton 
					to={'/'} 
					onClick={this.handleBackButton} 
				/>
				<div className={classes.textContainer}>
					<h1>
						<span
							role="img"
							aria-label='surprised face'>
							😦
						</span>
					</h1>
					<h1>404</h1>
					<h1 className={classes.msgText}>
						Page not found!
					</h1>
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(connect(null, { setCategory })(NotFound));
