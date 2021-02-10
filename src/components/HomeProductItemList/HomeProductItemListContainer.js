import React, { useEffect } from 'react'
import ProductItem from '../HomeProductItem/HomeProductItem'
import HomeProductItemList from './HomeProductItemList'
import CocktailSerices from '../../services/cocktail-service'
import { useDispatch, useSelector } from 'react-redux';
import {
    requestTopThree,
    setLoadedTopThree
} from '../../redux/actions/actions'
import Loader from '../Loader/Loader';

const cocktailService = new CocktailSerices();

const renderProducts = (data) => {
    return data.map((item) => <ProductItem {...item} />)

}

const HomeProductItemListContainer = () => {
    const dispatch = useDispatch()
    const { data, loader } = useSelector(state => state.topThreeList)
    const onLoad = (data) => {
        return dispatch(setLoadedTopThree(data))
    }
    const content = loader ? <Loader /> : renderProducts(data)

    useEffect(() => {
        dispatch(requestTopThree())
        cocktailService.getTopThree()
            .then((data) => {
                onLoad(data)
            })
    }, [])

    return <HomeProductItemList content={content} />
}

export default HomeProductItemListContainer