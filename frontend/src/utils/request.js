import axios from 'axios';
import { constants } from './constants';
import { idGenerator } from './helpers';

const getToken = () => {
	let token = localStorage.token;
	if (!token)
		token = localStorage.token = idGenerator();
	return token;
};

const headers = {
	'Accept': 'application/json',
	'Authorization': getToken()
};

const client = axios.create({
	baseURL: constants.api,
	headers
});

const onSuccess = (response) => {
	console.debug('Request Successful!', response);
	return response.data;
};

const onError = (error) => {
	console.error('Request Failed:', error.config);
	if (error.response) {
		console.error('Status:', error.response.status);
		console.error('Data:', error.response.data);
		console.error('Headers:', error.response.headers);
	}
	else {
		console.error('Error Message:', error.message);
	}
	return Promise.reject(error.response || error.message);
};

const request = (options) => (
	client(options)
		.then(onSuccess)
		.catch(onError)
);

export default request;
