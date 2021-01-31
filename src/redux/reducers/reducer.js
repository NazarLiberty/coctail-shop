const initialState = {
    alcoholCategories: {
        loader: true,
        data: []
    },
    topThreeList: {
        data: [],
        loader: true,
    }
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

        default:
            return state
    }
}

export default reducer