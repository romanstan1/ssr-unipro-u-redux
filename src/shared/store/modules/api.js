import "isomorphic-fetch";
import {receivedCategories, categoriesError} from './actions'

const URL = 'https://unipro-u.firebaseio.com/'
const SHALLOW = '?shallow=true'

export const fetchCategories = () => (dispatch) => {
  return fetch(URL + "categories.json" + SHALLOW)
  // return fetch('http://localhost:3000/api/categories')
    .then(response => response.json())
    .then(categories => dispatch(receivedCategories(categories)))
    .catch(err => dispatch(categoriesError(err)))
}


export const fetchSubject = (params) => (dispatch) => {
  // return fetch(URL + "categories.json" + SHALLOW)
  // // return fetch('http://localhost:3000/api/categories')
  //   .then(response => response.json())
  //   .then(categories => dispatch(receivedCategories(categories)))
  //   .catch(err => dispatch(categoriesError(err)))
}
