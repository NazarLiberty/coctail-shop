const setLoadedCategories = (data) => {
    return ({
        type: 'FETCH_SUCCESS_CATEGORIES',
        payload: data,
    })
}

const requestCategories = () => {
    return {
        type: 'FETCH_REQUEST_CATEGORIES'
    }
}

const requestTopThree = () => {
    return {
        type: 'FETCH_REQUEST_TOPTHREE'
    }
}

const setLoadedTopThree = (data) => {
    return {
        type: 'FETCH_SUCCESS_TOPTHREE',
        payload: data,
    }
}

export {
    setLoadedCategories,
    requestCategories,
    requestTopThree,
    setLoadedTopThree
}