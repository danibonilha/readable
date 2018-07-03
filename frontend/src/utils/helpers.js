const idGenerator = () =>  Math.random().toString(36).substr(-8);

const sortBy = (type, data) => {
	switch (type) {
		case 'votes':
			return data.sort((a, b) => b.voteScore - a.voteScore);
		case 'date':
			return data.sort((a, b) => b.timestamp - a.timestamp);
		default:
			return data;
	}
};

export { idGenerator, sortBy };
