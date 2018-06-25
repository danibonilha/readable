import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter basename='/readable'>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root')
);

registerServiceWorker();
