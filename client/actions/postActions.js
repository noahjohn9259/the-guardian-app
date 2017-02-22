import axios from 'axios';
// import dateFormat from 'dateformat';

import * as types from './actionTypes';

export function loadPostsSuccess(posts) {
  return {
    type: types.LOAD_POSTS_SUCCESS,
    posts
  };
}

export function loadPosts() {
  return dispatch => {
    return axios.get('https://content.guardianapis.com/search?api-key=04be9607-ee1e-44df-bd92-82f1a293f4de&show-fields=trailText,body,thumbnail&page-size=15').then(({data}) => {
      dispatch(loadPostsSuccess(data.response.results));
    }).catch(err => {
      throw err;
    });
  };
}
