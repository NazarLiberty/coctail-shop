import React from 'react'
import testImg from './../../assets/images/header-image.jpg'
import './HomeProduct.scss'


const HomeProduct = () => {
    return (
        <div className="home-prod-wrapper">
            <div className="home-prod-img">
                <img src={testImg} alt="test" />
                <div className="home-prod-hover">
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


        </div>
    )
}

export default HomeProduct