import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.scss'
import CocktailSerices from '../../services/cocktail-service'
import { useDispatch, useSelector } from 'react-redux';
import { setLoadedAlcoholicList } from '../../redux/actions/actions'
import Loader from '../Loader/Loader'

const cocktailService = new CocktailSerices();

const renderAlcholicList = (data) => {
    return data.map((props) => <ProductItem {...props} />)
}


const ProductList = () => {
    const [fetchError, setFetchError] = useState(false)
    const dispatch = useDispatch();
    const { data, loader } = useSelector(state => state.alcoholicList)

    useEffect(() => {
        cocktailService.getAlcoholicList()
            .then((data) => {
                dispatch(setLoadedAlcoholicList(data))
                setFetchError(false)
            })
            .catch(() => setFetchError(true))
    }, [])

    const renderContent = () => {
        if (fetchError) return <div>Something went wrong... :(</div>
        return <>
            <h1 className="product-list-title">
                Alcoholic Cocktails
        </h1>
            <div className="product-list">
                {loader ? <Loader /> : renderAlcholicList(data)}
            </div>
        </>

    }
    return (
        <div className="product-list-wrapper">
            {renderContent()}
        </div>
    )
}

export default ProductList
