
// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return {
         ...state,
        categories: Object.entries(action.payload).map(category =>
          category[1]? { title: category[0] } : null)
      }
    case "FETCH_SUBJECT_SUCCESS":
      return {
         ...state,
        subject: 'data goes ere'
      }
    default:
      return state;
  }
}
