
// Actions
const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

// Action Creators
export const requestNews = () => ({ type: FETCH_NEWS_REQUEST });
export const receivedNews = news => ({ type: FETCH_NEWS_SUCCESS, payload: news });
export const newsError = () => ({ type: FETCH_NEWS_FAILURE });
