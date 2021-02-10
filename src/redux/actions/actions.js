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

const setLoadedCategoryList = (data) => {
    return {
        type: 'FETCH_SUCCESS_CATLIST',
        payload: data,
    }

}

const requestActiveItem = (id) => {
    return {
        type: 'FETCH_REQUEST_ACTIVE',
        payload: id
    }
}

const setActiveItem = (data) => {
    return {
        type: 'SET_ACTIVE_ITEM',
        payload: data,

    }
}

export {
    setLoadedCategories,
    requestCategories,
    requestTopThree,
    setLoadedTopThree,
    setLoadedCategoryList,
    setActiveItem,
    requestActiveItem,
}