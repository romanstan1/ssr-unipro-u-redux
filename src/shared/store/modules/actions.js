
// Action Creators

export const receivedCategories = categories => ({
  type: "FETCH_CATEGORIES_SUCCESS",
  payload: categories
})

export const receivedSubject = (subject, slug) => ({
  type: "FETCH_SUBJECT_SUCCESS",
  payload: {subject, slug}
})

export const categoriesError = () => ({
  type: "FETCH_CATEGORIES_FAILURE"
})

export const subjectError = () => ({
  type: "FETCH_SUBJECT_FAILURE"
})
