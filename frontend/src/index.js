import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);

registerServiceWorker();
