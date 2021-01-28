import React from 'react'
import './ProductItemList.scss'
import ProductItem from '../ProductItem/ProductItem'

const ProductItemList = () => {
    return (
        <div className="home-prod-list-wrapper">
            <h1 className="home-prod-list-title">
                cocktails of this week
                </h1>

            <div className="home-product-list">
                <ProductItem />
                <ProductItem />
                <ProductItem />

            </div>
        </div>
    )
}

export default ProductItemList