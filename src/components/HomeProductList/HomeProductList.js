import React from 'react'
import './HomeProductList.scss'
import HomeProduct from './../HomeProduct/HomeProduct'

const HomeProductList = () => {
    return (
        <div className="home-prod-list-wrapper">
            <h1 className="home-prod-list-title">
                cocktails of this week
                </h1>

            <div className="home-product-list">
                <HomeProduct />
                <HomeProduct />
                <HomeProduct />

            </div>
        </div>
    )
}

export default HomeProductList