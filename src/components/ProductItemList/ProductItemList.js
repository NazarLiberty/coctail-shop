import React from 'react'
import './ProductItemList.scss'


const ProductItemList = ({ content }) => {
    return (
        <div className="home-prod-list-wrapper">
            <h1 className="home-prod-list-title">
                cocktails of this week
            </h1>

            <div className="home-product-list">
                {content}
            </div>
        </div>
    )
}

export default ProductItemList