import React from 'react'
import './HomeProductItem.scss'


const renderIngredients = (data) => {
    return data.map((item, index) => {
        if (item) return <span key={index}>{index + 1}: {item}</span>
    })
}

const HomeProductItem = ({ name, src, description, ingredients, price }) => {
    return (
        <div className="home-prod-wrapper">
            <div className="home-prod-img">
                <img src={src} alt="test" />
                <div className="home-prod-hover">
                    <div className="home-prod-ingredients">
                        <span className="home-prod-ingredients-title">Cocktails ingredients</span>
                        {renderIngredients(ingredients)}

                    </div>
                    <div className="home-prod-order-block">
                        <div className="home-prod-price">
                            ${price}
                        </div>
                        <div className="home-prod-order">
                            <button>
                                Buy now
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-prod-info-block">
                <div className="home-prod-name">
                    {name}
                </div>
                <div className="home-prod-desc">
                    {description}
                </div>

            </div>


        </div >
    )
}

export default HomeProductItem