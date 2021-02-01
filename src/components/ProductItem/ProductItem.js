import React, { useState } from 'react'
import './ProductItem.scss'
import noImage from '../../assets/images/no-image.jpg'
import { setActiveItem } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'

const ProductItem = ({ src, name, active, id }) => {
    const dispatch = useDispatch();

    let imgSrc = noImage;
    if (active && src) imgSrc = src;
    if (!active && src) imgSrc = `${src}/preview`;
    if (active) console.log(imgSrc)
    return (
        <div className={`product-item-wrapper${active ? ' active' : ''}`}>
            <div className="product-item-img">
                <img src={`${imgSrc}`} alt={name} />
            </div>
            <div className="product-item-info">
                <h2 className="product-info-title">
                    {name}
                </h2>
                <button className="product-info-details"
                    onClick={() => dispatch(setActiveItem(id, 'alcoholic-category'))}>
                    Details
                </button>
            </div>
            <div className="product-info-active">
                <div className="product-active-title">
                    Name
                    </div>
                <div className="product-active-desc">
                    info
                    </div>

            </div>
        </div>)
}

export default ProductItem