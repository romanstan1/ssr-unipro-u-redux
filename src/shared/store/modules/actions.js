
// Action Creators

// export const requestCategories = () => ({ type: "FETCH_CATEGORIES_REQUEST" })

export const receivedCategories = categories => ({ type: "FETCH_CATEGORIES_SUCCESS", payload: categories })

export const categoriesError = () => ({ type: "FETCH_CATEGORIES_FAILURE" })
