import React from 'react'
import AlcoholCategoryItem from '../AlcoholCategoryItem/AlcoholCategoryItem'
import './AlcoholCategoryList.scss'


const AlcoholCategoryList = () => {
    return (
        <div className="alcohol-cat-list-wrapper">
            <div className="aclohol-cat-list-title">
                Choose your cocktail by alcohol:
            </div>
            <div className="alcohol-cat-list">
                <AlcoholCategoryItem />
                <AlcoholCategoryItem />
                <AlcoholCategoryItem />
                <AlcoholCategoryItem />
                <AlcoholCategoryItem />
            </div>
        </div>
    )
}

export default AlcoholCategoryList