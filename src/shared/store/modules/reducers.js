
// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return { ...state, categories: action.payload }
    default:
      return state;
  }
}
