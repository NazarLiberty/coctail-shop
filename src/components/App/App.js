import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import './App.scss'
import Homepage from '../Pages/Homepage'
import Alcoholic from '../Pages/Alcoholic'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NonAlcoholic from '../Pages/NonAlcoholic'
import OptionalPage from '../Pages/OptionalPage'

import CocktailSerices from '../../services/cocktail-service'
import ProductListContainer from '../ProductList/ProductListContainer'

const App = () => {
    // test data fetching
    const service = new CocktailSerices();
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy')
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [service])

    return (<>
        <Provider store={store} >
            <Router>
                <ErrorBoundry>
                    <HeaderMenu />
                    <Header />
                    <div className="page-wrapper">
                        <Route path="/" component={Homepage} exact />
                        <Route path="/alcoholic" component={Alcoholic} exact />
                        <Route path="/non-alcoholic" component={NonAlcoholic} exact />
                        <Route path="/optional" component={OptionalPage} exact />

                        <Route path="/vodka" render={() => <ProductListContainer category='Vodka' />} exact />
                        <Route path="/gin" render={() => <ProductListContainer category='Gin' />} exact />
                        <Route path="/tequila" render={() => <ProductListContainer category='Tequila' />} exact />
                        <Route path="/whiskey" render={() => <ProductListContainer category='Whiskey' />} exact />
                        <Route path="/wine" render={() => <ProductListContainer category='Wine' />} exact />
                        <Route path="/beer" render={() => <ProductListContainer category='Beer' />} exact />
                        <Route path="/absent" render={() => <ProductListContainer category='Absent' />} exact />
                        <Route path="/rum" render={() => <ProductListContainer category='Rum' />} exact />
                        <Route path="/brandy" render={() => <ProductListContainer category='Brandy' />} exact />

                    </div>
                </ErrorBoundry>
            </Router>
        </Provider>

    </>
    )
}
export default App;