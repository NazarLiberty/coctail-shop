import React, { useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import ProductItemList from './ProductItemList'
import CocktailSerices from '../../services/cocktail-service'
import { useDispatch, useSelector } from 'react-redux';
import {
    requestTopThree,
    setLoadedTopThree
} from '../../redux/actions/actions'

const cocktailService = new CocktailSerices();

const renderProducts = (data) => {
    return data.map((item) => <ProductItem {...item} />)

}

const ProductItemListContainer = () => {
    const dispatch = useDispatch()
    const { data, loader } = useSelector(state => state.topThreeList)
    const onLoad = (data) => {
        return dispatch(setLoadedTopThree(data))
    }
    const content = loader ? <div>TOP 3 IS LOADING...</div> : renderProducts(data)

    useEffect(() => {
        dispatch(requestTopThree())
        cocktailService.getTopThree()
            .then((data) => {
                onLoad(data)
            })
    }, [])

    return <ProductItemList content={content} />
}

export default ProductItemListContainer