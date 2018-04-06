import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./modules/reducers";
import logger from 'redux-logger'


const middleware = [
  thunk,
  logger
]


const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middleware));

export default configureStore
