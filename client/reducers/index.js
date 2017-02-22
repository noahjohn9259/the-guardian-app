// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './postReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  posts
});

export default rootReducer;

