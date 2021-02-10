import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.scss'
import CocktailSerices from '../../services/cocktail-service'
import { useDispatch, useSelector } from 'react-redux';
import { setLoadedCategoryList } from '../../redux/actions/actions'
import Loader from '../Loader/Loader'
import ProductList from './ProductList'

const cocktailService = new CocktailSerices();


const renderAlcholicList = data => data.map((props) => <ProductItem {...props} />)
const getDataList = (category, service) => {
    switch (category) {
        case 'alcoholic':
            return service.getAlcoholicList
        case 'non-alcoholic':
            return service.getNonAlcoholicList
        case 'optional':
            return service.getOptionalList
        default: return service.getListByAlcohol
    }
}

const ProductListContainer = ({ category }) => {
    const [fetchError, setFetchError] = useState(false)
    const dispatch = useDispatch();
    const { data, loader } = useSelector(state => state.categoryList)

    useEffect(() => {
        getDataList(category, cocktailService)(category)
            .then((data) => {
                dispatch(setLoadedCategoryList(data))
                setFetchError(false)
            })
            .catch(() => setFetchError(true))
        window.scroll({
            left: 0,
            top: 700,
            behavior: 'smooth'
        })
    }, [])

    const renderContent = () => {
        if (fetchError) return <div>Something went wrong... :(</div>
        return <>
            <h1 className="product-list-title">
                {category} Cocktails
        </h1>
            <div className="product-list">
                {loader ? <Loader /> : renderAlcholicList(data)}
            </div>
        </>
    }
    const content = renderContent()
    return <ProductList content={content} />

}

export default ProductListContainer