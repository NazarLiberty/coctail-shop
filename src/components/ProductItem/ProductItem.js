import React, { useEffect, useRef, useState } from 'react'
import './ProductItem.scss'
import noImage from '../../assets/images/no-image.jpg'
import { setActiveItem } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'
import CocktailSerices from '../../services/cocktail-service'

const cocktailService = new CocktailSerices();

const ProductItem = ({ src, name, active, id }) => {
    const dispatch = useDispatch();
    const activeElement = useRef(null)

    const onActiveItem = () => {
        dispatch(setActiveItem(id, 'alcoholic-category'))

        setTimeout(() => {
            const elementPosY = activeElement.current.offsetTop
            window.scroll({
                left: 0,
                top: elementPosY - 150,
                behavior: 'smooth'
            })
        }, 450);
    }

    let imgSrc = noImage;
    if (active && src) imgSrc = src;
    if (!active && src) imgSrc = `${src}/preview`;


    return (
        <div className={`product-item-wrapper${active ? ' active' : ''}`}
            ref={activeElement}>
            <div className="product-item-img">
                <img src={`${imgSrc}`} alt={name} />
            </div>
            <div className="product-item-info">
                <h2 className="product-info-title">
                    {name}
                </h2>
                <button className="product-info-details"
                    onClick={() => onActiveItem()}>
                    Details
                </button>
            </div>
            <div className="product-info-active" >
                <div className="product-active-title">
                    Name
                    </div>
                <div className="product-active-desc">
                    info
                    </div>

            </div>
        </div >)
}

export default ProductItem