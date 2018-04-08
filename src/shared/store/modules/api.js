import "isomorphic-fetch";
import {receivedCategories, categoriesError,receivedSubject, subjectError} from './actions'

const URL = 'https://unipro-u.firebaseio.com'
const SHALLOW = '?shallow=true'

export const fetchCategories = () => (dispatch) => {
  // return fetch(URL + "/categories.json")
  return fetch("http://localhost:3000/api/categories")
    .then(response => response.json())
    .then(categories => dispatch(receivedCategories(categories)))
    .catch(err => dispatch(categoriesError(err)))
}

export const fetchSubject = (url) => (dispatch) => {
  return fetch(URL + `${url}.json`)
    .then(res => res.json())
    .then(subject => {
      const slug = url.split("/").pop()
      dispatch(receivedSubject(subject, slug))
    })
    .catch(err => dispatch(subjectError(err)))
}
