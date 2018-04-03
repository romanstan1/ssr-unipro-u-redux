import "isomorphic-fetch";
import {requestNews, receivedNews, newsError} from './actions'

export const fetchNews = () => (dispatch, getState) => {
  dispatch(requestNews());
  return fetch("http://localhost:3000/api/categories")
    .then(response => response.json())
    .then(news => dispatch(receivedNews(news)))
    .catch(err => dispatch(newsError(err)));
};
