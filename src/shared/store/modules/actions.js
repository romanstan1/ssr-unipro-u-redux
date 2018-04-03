
// Action Creators

export const requestNews = () => ({ type: "FETCH_CATEGORIES_REQUEST" })

export const receivedNews = categories => ({ type: "FETCH_CATEGORIES_SUCCESS", payload: categories })

export const newsError = () => ({ type: "FETCH_CATEGORIES_FAILURE" })
