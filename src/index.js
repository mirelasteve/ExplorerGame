import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,compose, applyMiddleware} from 'redux';
import App from './Component/App';
import rootReducer from './Component/redux/reducers/reducer';
import thunk from 'redux-thunk';
// import {database} from './database/config';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)),);

ReactDOM.render(
  <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
  document.getElementById('root')
);


