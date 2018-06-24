import { request } from '../utils';

const getAll = () => (
	request({
		url: '/categories/',
		method: 'GET'
	})
);

const CategoriesService = { getAll };

export default CategoriesService;
