import React from 'react'
import './AlcoholCategoryItem.scss'

const AlcoholCategoryItem = ({ name, src }) => {
    return (
        <div className="alcohol-cat-item-wrapper">
            <div className="alcohol-cat-img">
                <img src={src} alt="test" />
            </div>
            <h3 className="alcohol-cat-title">
                {name}
            </h3>
        </div>
    )
}
export default AlcoholCategoryItem