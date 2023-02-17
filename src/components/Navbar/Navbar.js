import React from 'react'

function Navbar() {
    return (
        <nav>

            {/* logo of orion  */}
            <div className="logo">
                <div className="logo-circle-wrap">
                    <div className="logo-white-bg"></div>
                </div>
                <h2>WASSERSTOFF</h2>
            </div>

            {/* search bar for searching items */}
            <div className="search-bar">
                <input type="search" />
                <div className="search-icon"></div>
                <div className="search-icon-line"></div>
            </div>

            {/* navigation menu options on nav bar */}

            <a href="/">Statistics</a>
            <a href="/">Overview</a>
            <a href="/">Dashboard</a>
            <a href="/">Analytics</a>

            <div className="right-icons">
                <div className="man-icon"></div>
                <div className="menu-bar-box">
                <div className="menu-bar1"></div>
                <div className="menu-bar2"></div>
                <div className="menu-bar3"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
