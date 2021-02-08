import SearchBar from '../SearchBar/SearchBar'
import AlcoholCategoryListContainer from '../AlcoholCategoryList/AlcoholCategoryListContainer'
import HomeProductItemListContainer from '../HomeProductItemList/HomeProductItemListContainer'
import React from 'react'

const Homepage = () => {
    return (
        <>
            <SearchBar />
            <HomeProductItemListContainer />
            <AlcoholCategoryListContainer />
        </>
    )
}

export default Homepage