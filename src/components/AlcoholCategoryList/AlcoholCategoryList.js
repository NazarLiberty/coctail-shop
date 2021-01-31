import React from 'react'
import './AlcoholCategoryList.scss'



const AlcoholCategoryList = ({ content }) => {

    return (
        <div className="alcohol-cat-list-wrapper">
            <div className="aclohol-cat-list-title">
                Choose your cocktail by alcohol:
            </div>
            <div className="alcohol-cat-list">
                {content}
            </div>
        </div>
    )
}


export default AlcoholCategoryList