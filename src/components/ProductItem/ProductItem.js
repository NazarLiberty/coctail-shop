import React, { useRef, useState } from 'react'
import './ProductItem.scss'
import noImage from '../../assets/images/no-image.jpg'
import imgLoader from '../../assets/images/img-loader.gif'
import { setActiveItem, requestActiveItem } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import CocktailSerices from '../../services/cocktail-service'
import Loader from '../Loader/Loader'

const cocktailService = new CocktailSerices();

const renderIngredients = (data) => {
    return data.map((item, index) => {
        if (item) return <span key={index}>{index + 1}: {item}</span>
        else return null
    })
}

const ProductItem = ({ src, name, active, id, price }) => {
    const [fetchError, setFetchError] = useState(false)
    const dispatch = useDispatch();
    let { activeName, activeDescription, activePrice, loader, activeIngredients } = useSelector(state => state.activeItemData)
    const activeElement = useRef(null)

    const onActiveItem = () => {
        dispatch(requestActiveItem(id))
        setTimeout(() => {
            const elementPosY = activeElement.current.offsetTop
            window.scroll({
                left: 0,
                top: elementPosY,
                behavior: 'smooth'
            })
        }, 550);
        cocktailService.getInfoById(id)
            .then((data) => {
                dispatch(setActiveItem(data))
                setFetchError(false)
            })
            .catch(() => setFetchError(true))
    }

    if (!activeDescription) activeDescription = 'There is no instruction :('
    let imgSrc = noImage;
    if (active && src) imgSrc = src;
    if (!active && src) imgSrc = `${src}/preview`;
    if (active && loader) imgSrc = imgLoader;

    const activeContentIngredients = () => {
        if (!loader && active) return (
            <div className="product-active-hover">
                <div className="product-active-ingredients">
                    <span className="product-active-ingredients-title">Cocktails ingredients</span>
                    {renderIngredients(activeIngredients)}
                </div>
            </div>
        )
        return null
    }
    const activeContent = () => {
        if (fetchError) return (
            <div className="product-info-active" >
                <div>Something went wrong :(</div>
            </div>
        )
        return (
            <div className="product-info-active" >
                { loader && active ? <Loader /> :
                    <>
                        <h1 className="product-active-title">
                            {activeName}
                        </h1>
                        <div className="product-active-desc">
                            {activeDescription}
                            <div className="product-active-order-b">
                                <p className="product-active-price">
                                    ${activePrice}
                                </p>
                                <button className="product-active-order">
                                    Buy now
                        </button>
                            </div>
                        </div>
                    </>}
            </div>
        )
    }

    return (
        <div className={`product-item-wrapper${active ? ' active' : ''}`}
            ref={activeElement}>
            <div className="product-item-img">
                <img src={`${imgSrc}`} alt={name} />
                {activeContentIngredients()}
            </div>
            <div className="product-item-info">
                <h2 className="product-info-title">
                    {name}
                </h2>
                <p className="product-item-price">
                    ${price}
                </p>
                <button className="product-info-details"
                    onClick={() => onActiveItem()}>
                    Details
                </button>
            </div>
            {activeContent()}
        </div >)
}

export default ProductItem