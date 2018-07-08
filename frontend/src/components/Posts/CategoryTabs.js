import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../../store/actions/CategoryActions';

class CategoryTabs extends React.Component {
	render() {
		return (
			<Paper >
				<Tabs
					value={this.props.current}
					onChange={this.props.onChange}
					indicatorColor="primary"
					centered
				>
					<Tab 
						label="All"
						value="all"
						component={Link}
						to='/'
					/>
					{this.props.categories.length > 0 &&
						this.props.categories.map((category) =>
							<Tab 
								key={category.name} 
								label={category.name}
								value={category.name}
								component={Link}
								to={`/${category.path}`}
							/>
						)}
				</Tabs>
			</Paper>
		);
	}
}

const mapStateToProps = ({ CategoryReducer }) => {
	const { categories, current } = CategoryReducer;
	return {
		categories,
		current
	};
};

export default connect(mapStateToProps, { getCategories })(CategoryTabs);