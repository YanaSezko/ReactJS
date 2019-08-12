import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';


import '../css/styles.css';


const store = createStore (allReducers);

ReactDOM.render(
	<Provider store={store}>
		<WebPage />
	</Provider>,
	document.getElementById('root')
);