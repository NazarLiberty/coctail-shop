const initialState = {
    alcoholCategories: {
        loader: true,
        data: []
    },
    topThreeList: {
        data: [],
        loader: true,
    },
    alcoholicList: {
        data: [],
        loader: true,
    }
}

const setActiveItem = (data, id) => {
    return data.map((item) => {
        item.active = false
        if (item.id === id) { item.active = true; }
        return item;
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS_CATEGORIES':
            return {
                ...state,
                alcoholCategories: {
                    data: action.payload,
                    loader: false,
                }
            }
        case 'FETCH_REQUEST_CATEGORIES':
            return {
                ...state,
                alcoholCategories: {
                    ...state.alcoholCategories,
                    loader: true,
                }
            }

        case 'FETCH_REQUEST_TOPTHREE':
            return {
                ...state,
                topThreeList: {
                    ...state.topThreeList,
                    loader: true,
                }
            }

        case 'FETCH_SUCCESS_TOPTHREE':
            return {
                ...state,
                topThreeList: {
                    data: action.payload,
                    loader: false,
                }
            }
        case 'FETCH_SUCCESS_ALCOLIST':
            return {
                ...state,
                alcoholicList: {
                    loader: false,
                    data: action.payload
                }
            }
        case 'SET_ACTIVE_ITEM':
            const { area, id } = action.payload
            let defaultAlcoholicList = state.alcoholicList.data
            if (area === 'alcoholic-category') defaultAlcoholicList = setActiveItem(defaultAlcoholicList, id)
            return {
                ...state,
                alcoholicList: {
                    ...state.alcoholicList,
                    data: defaultAlcoholicList
                }
            }

        default:
            return state
    }
}

export default reducer