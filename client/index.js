/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import { loadPosts } from './actions/postActions';

require('./favicon.ico'); // Tell webpack to load favicon.ico

import './stylesheets/main.scss';
import '../node_modules/bootswatch/flatly/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadPosts());
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
