import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import './App.scss'
import CocktailSerices from '../../services/cocktail-service'
import Homepage from '../Pages/Homepage'
import Alcoholic from '../Pages/Alcoholic'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Header from '../Header/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    // test data fetching
    // const service = new CocktailSerices();
    // useEffect(() => {
    //     service.getAlcoholicList()
    //         .then((data) => console.log(data))
    // }, [service])

    return (<>
        <Provider store={store} >
            <Router>
                <ErrorBoundry>
                    <HeaderMenu />
                    <Header />
                    <div className="page-wrapper">
                        <Route path="/" component={Homepage} exact />
                        <Route path="/alcoholic" component={Alcoholic} exact />
                    </div>
                </ErrorBoundry>
            </Router>
        </Provider>

    </>
    )
}
export default App;