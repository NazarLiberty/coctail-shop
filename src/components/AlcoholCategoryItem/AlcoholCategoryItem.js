import React from 'react'
import './AlcoholCategoryItem.scss'
import testImg from './../../assets/images/header-image.jpg'

const AlcoholCategoryItem = () => {
    return (
        <div className="alcohol-cat-item-wrapper">
            <div className="alcohol-cat-img">
                <img src={testImg} alt="test" />
            </div>
            <h3 className="alcohol-cat-title">
                Test Alcohol
            </h3>
        </div>
    )
}
export default AlcoholCategoryItem