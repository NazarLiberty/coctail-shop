import React, { useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.scss'
import CocktailSerices from '../../services/cocktail-service'
import { useDispatch, useSelector } from 'react-redux';
import { setLoadedAlcoholicList } from '../../redux/actions/actions'

const cocktailService = new CocktailSerices();

const renderAlcholicList = (data) => {
    return data.map((props) => <ProductItem {...props} />)
}


const ProductList = () => {
    const dispatch = useDispatch();
    const { data, loader } = useSelector(state => state.alcoholicList)

    useEffect(() => {
        cocktailService.getAlcoholicList()
            .then((data) => dispatch(setLoadedAlcoholicList(data)))
    }, [])

    return <div className="product-list-wrapper">
        <h1 className="product-list-title" id="list-start">
            Sample Title
        </h1>
        <div className="product-list">
            {loader ? <div>LOADING...</div> : renderAlcholicList(data)}
        </div>
    </div>
}

export default ProductList
