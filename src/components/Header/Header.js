import React from 'react'
import './Header.scss'

const Header = () => {
    return <div className="header-wrapper">
        <div className="header-filter"></div>
        <div className="header-main">
            <h1 className="header-title">What's your mood today?</h1>
            <h2 className="header-subtitle">Choose the best you need</h2>
        </div>

    </div>
}

export default Header