import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import './App.scss'
import CocktailSerices from '../../services/cocktail-service'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import AlcoholCategoryListContainer from '../AlcoholCategoryList/AlcoholCategoryListContainer'
import HomeProductItemListContainer from '../HomeProductItemList/HomeProductItemListContainer'
import ProductList from '../ProductList/ProductList'

const App = () => {
    // test data fetching
    const service = new CocktailSerices();
    useEffect(() => {
        service.getAlcoholicList()
            .then((data) => console.log(data))
    }, [service])

    return (<>
        <Provider store={store} >
            <ErrorBoundry>
                <HeaderMenu />
                <Header />
                <div className="page-wrapper">
                    {/* <SearchBar />
                    <HomeProductItemListContainer />
                    <AlcoholCategoryListContainer /> */}
                    <ProductList />
                </div>
            </ErrorBoundry>
        </Provider>

    </>
    )
}
export default App;