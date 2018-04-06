

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return {
         ...state,
        categories: action.payload
      }
    // case "FETCH_SUBJECT_SUCCESS":
    // // console.log("action.payload",action.payload)
    //   return {
    //      ...state,
    //     subjects: {
    //       ...state.subjects,
    //       [action.payload.slug]: action.payload.subject
    //     }
    //   }
    default:
      return state;
  }
}
