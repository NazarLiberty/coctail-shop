import React from 'react'
import testImg from './../../assets/images/header-image.jpg'
import './ProductItem.scss'


const ProductItem = () => {
    return (
        <div className="home-prod-wrapper">
            <div className="home-prod-img">
                <img src={testImg} alt="test" />
                <div className="home-prod-hover">
                    <div className="home-prod-ingredients">
                        <span className="home-prod-ingredients-title">Cocktails ingredients</span>
                        <span>1: Test</span>
                        <span>2: Test</span>
                        <span>3: Test</span>

                    </div>
                    <div className="home-prod-order-block">
                        <div className="home-prod-price">
                            $4.50
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
                    Test Name
                </div>
                <div className="home-prod-desc">
                    lorem dsad dsad asd asdasd
                    asdsad asdasdasdas dsadsad dsadas dsad
                    dsadasdasd dasdsad dagfsdgfdg
                </div>

            </div>


        </div >
    )
}

export default ProductItem