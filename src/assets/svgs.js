const HeaderLogo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485 180.7"><path d="M63.2 98.4h16.2c14 0 27.7-7 27.7-27 0-20.3-15-26.7-30-26.7H45V136h18.3V98.4zm0-49.8H76c9 0 13.3 6 13.3 22.7C89.3 89 85 94.5 76 94.5H63.3v-46zM157.6 138c23.6 0 31.4-12.4 31.4-29.7v-63h-5.7v61.2c0 14.2-3.8 26.4-23.5 26.4-11.2 0-18.5-5.2-18.5-20V45.3H123v63.5c0 16.8 13 29.3 34.6 29.3zM212.6 53.2l41.7 82.8h15.4V44.7h-5.2v71.8h-.3l-34.8-71.8h-22V136h5.2zM326.2 137.6c16.8 0 30.3-9.8 30.3-33.5H352c0 19-10.5 29-24 29-16 0-18-11-18-25V72.7c0-14 2-25 17.4-25 14.5 0 24 11 24 29h4.7c0-22-12.6-33.4-30-33.4-24 0-39 19-39 47.7 0 28.7 15.2 46.6 39.2 46.6zM391.2 90h31v46h17.6V44.7h-17.6v41h-31v-41h-17.6V136h17.6z"></path><path d="M0 0v180.7h485V0H0zm480 175.7H5V5h475v170.7z"></path></svg>
    )
}

const BurgerMenu = ({ toggleMenu, isMenuActive }) => {
    const buttonClass = isMenuActive ? "burger-btn active" : "burger-btn"
    return (
        <svg onClick={() => toggleMenu()}
            className={buttonClass} width="80" height="52" viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
            <rect className="burger-btn--1" width="40" height="3" rx="0" ry="0" />
            <rect className="burger-btn--2" width="40" height="3" y="10" rx="0" ry="0" />
            <rect className="burger-btn--3" width="40" height="3" y="20" rx="0" ry="0" />
        </svg>)
}
export { HeaderLogo, BurgerMenu }