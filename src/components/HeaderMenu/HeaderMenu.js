import React, { useEffect, useRef, useState } from 'react'
import './HeaderMenu.scss'
import { HeaderLogo } from '../../assets/svgs'

const HeaderMenu = () => {
    const [stickyMenu, setStickyMenu] = useState(false)
    const headerMenuElement = useRef(null)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isMenuSticky = headerMenuElement.current.offsetTop >= 300 ? true : false;
            setStickyMenu(isMenuSticky)
        })
    }, [])


    return (
        <div
            className={`header-menu-wrapper${stickyMenu ? ' menu-sticky' : ""}`}
            ref={headerMenuElement}>
            <div className={`menu-logo${stickyMenu ? ' menu-sticky' : ""}`}>
                <a className="menu-logo-img">
                    <HeaderLogo />
                </a>
            </div>
            <div className={`menu-cat-wrapper${stickyMenu ? ' menu-sticky' : ""}`}>
                <div className="menu-cat-item">
                    Alcoholic
            <span className="menu-cat-hover">
                    </span>
                </div>
                <div className="menu-cat-item">
                    non-alcoholic
            <span className="menu-cat-hover">
                    </span></div>
                <div className="menu-cat-item">
                    Optional Alcohol
            <span className="menu-cat-hover">
                    </span>
                </div>
                <div className="menu-cat-item">
                    Contact Us
            <span className="menu-cat-hover">
                    </span>
                </div>
            </div>
            <div className="menu-socials">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="menu-cart">
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div >)
}

export default HeaderMenu;