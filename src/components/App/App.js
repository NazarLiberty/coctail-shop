import React, { useEffect } from 'react'
import './App.scss'
import CocktailSerices from '../../services/cocktail-service'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Header from '../Header/Header'
import HomeProductList from '../HomeProductList/HomeProductList'

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
            <HomeProductList />

        </div>
    </>
    )
}
export default App;