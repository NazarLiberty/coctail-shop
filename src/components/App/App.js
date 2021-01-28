import React, { useEffect } from 'react'
import './App.scss'
import CocktailSerices from '../../services/cocktail-service'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Header from '../Header/Header'
import ProductItemList from '../ProductItemList/ProductItemList'
import AlcoholCategoryItem from '../AlcoholCategoryItem/AlcoholCategoryItem'
import AlcoholCategoryList from '../AlcoholCategoryList/AlcoholCategoryList'

const App = () => {
    const service = new CocktailSerices();
    useEffect(() => {
        service.getCocktails()
            .then((data) => console.log(data))
    }, [service])

    return (<>
        <HeaderMenu />
        <Header />
        <div className="page-wrapper">
            <ProductItemList />
            <AlcoholCategoryList />
        </div>

    </>
    )
}
export default App;