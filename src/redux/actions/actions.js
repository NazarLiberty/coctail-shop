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

const setLoadedAlcoholicList = (data) => {
    return {
        type: 'FETCH_SUCCESS_ALCOLIST',
        payload: data,
    }

}

const setActiveItem = (id, area) => {
    return {
        type: 'SET_ACTIVE_ITEM',
        payload: {
            id,
            area
        }
    }
}

export {
    setLoadedCategories,
    requestCategories,
    requestTopThree,
    setLoadedTopThree,
    setLoadedAlcoholicList,
    setActiveItem,
}