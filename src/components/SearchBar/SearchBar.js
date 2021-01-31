import React from 'react'
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className="searchbar-wrapper">
            <div className="searchbar-title">
                Search for your cocktail...
            </div>
            <div className="searchbar-block">
                <input type="text" className="searchbar" placeholder="ex. Margarita">
                </input>
            </div>
        </div>
    )
}

export default SearchBar