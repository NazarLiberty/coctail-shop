import React, { useEffect, useRef, useState } from 'react'
import './HeaderMenu.scss'
import { HeaderLogo, BurgerMenu } from '../../assets/svgs'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
    const [stickyMenu, setStickyMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)


    const headerMenuElement = useRef(null)

    const toggleMenu = () => {
        setActiveMenu(() => !activeMenu)
    }


    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            const responsive = document.body.offsetWidth <= 991;
            const isMenuSticky = headerMenuElement.current.offsetTop > 240 ? true : false;
            if (!responsive) {
                setStickyMenu(isMenuSticky)
            }
        })
    }, [])


    return (
        <div
            className={`header-menu-wrapper${stickyMenu ? ' menu-sticky' : "", activeMenu ? ' active' : ''}`}
            ref={headerMenuElement}>
            <div className={`menu-logo${stickyMenu ? ' menu-sticky' : ""}`}>
                <a className="menu-logo-img">
                    <Link to="/">
                        <HeaderLogo />
                    </Link>
                </a>
            </div>
            <div className={`menu-cat-wrapper${stickyMenu ? ' menu-sticky' : ""}`}>

                <Link to="/alcoholic">
                    <div className="menu-cat-item">
                        Alcoholic
            <span className="menu-cat-hover">
                        </span>
                    </div>
                </Link>
                <div className="menu-cat-item">
                    non-alcoholic
            <span className="menu-cat-hover">
                    </span></div>
                <div className="menu-cat-item">
                    Optional Alcohol
            <span className="menu-cat-hover">
                    </span>
                </div>
                <div className="menu-cat-item special">
                    Contact Us
            <span className="menu-cat-hover">
                    </span>
                </div>
                <div className="menu-socials-responsive">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
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
            <div className="menu-burger">
                <BurgerMenu
                    toggleMenu={toggleMenu}
                    isMenuActive={activeMenu} />
            </div>
        </div >)
}


export default HeaderMenu;