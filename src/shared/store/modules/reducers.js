


// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return {
         ...state,
        categories: action.payload
      }
    case "SWIPE_SUBJECT":
      return {
         ...state,
        categories: state.categories.map(category => (
          category.title === action.payload.categoryTitle?
          {
            ...category,
            index: action.payload.nextIndex > category.subjects.length - 1 ? 0 :
                   action.payload.nextIndex < 0 ? category.subjects.length - 1 :
                   action.payload.nextIndex
          }
          : category
        ))
      }
    default:
      return state;
  }
}
