const initialState = {
    alcoholCategories: {
        loader: false,
        data: []
    },
    topThreeList: {
        data: [],
        loader: false,
    },
    categoryList: {
        data: [],
        loader: true,
    },
    activeItemData: {
        name: null,
        description: null,
        price: null,
        activeIngredients: null,
        loader: false
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

        case 'FETCH_REQUEST_ACTIVE':
            const activeItemId = action.payload
            const newList = setActiveItem(state.categoryList.data, activeItemId)

            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    data: newList,
                },
                activeItemData: {
                    ...state.activeItemData,
                    loader: true,
                }
            }

        case 'FETCH_SUCCESS_CATLIST':
            return {
                ...state,
                categoryList: {
                    loader: false,
                    data: action.payload
                }
            }
        case 'SET_ACTIVE_ITEM':
            const activeItemData = action.payload;
            const { name, description, price, ingredients } = activeItemData

            return {
                ...state,
                activeItemData: {
                    activeName: name,
                    activeDescription: description,
                    activePrice: price,
                    loader: false,
                    activeIngredients: ingredients
                }
            }

        default:
            return state
    }
}

export default reducer