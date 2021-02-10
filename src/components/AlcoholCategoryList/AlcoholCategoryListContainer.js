import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoadedCategories } from '../../redux/actions/actions'
import AlcoholCategoryItem from '../AlcoholCategoryItem/AlcoholCategoryItem'
import AlcoholCategoryList from './AlcoholCategoryList'
import DummyAlcoholService from '../../services/dummy-alcohol-service'
import { Link } from 'react-router-dom'

const renderCategories = (data) => {
    return data.map((item) => {
        return <Link to={`/${item.name}`}> <AlcoholCategoryItem {...item} /> </Link>
    })
}

const AlcoholCategoryListContainer = () => {
    const dispatch = useDispatch();
    const { data, loader } = useSelector(state => state.alcoholCategories)

    const loadedAlcoholCat = (data) => {
        dispatch(setLoadedCategories(data))
    }
    const content = loader ? <div>Loading...</div> : renderCategories(data)
    const alcoholCategoryService = new DummyAlcoholService();
    useEffect(() => {
        alcoholCategoryService.getAlcoholList()
            .then((res) => loadedAlcoholCat(res))
    }, [])

    return <AlcoholCategoryList content={content} />
}

export default AlcoholCategoryListContainer