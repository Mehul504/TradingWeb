import React from 'react';
import Logo from "../asserts/WhatsApp Image 2025-03-30 at 11.03.20 AM.jpeg"
const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    {/* <a href="/"> */}
                        <img src={Logo} alt="Stockoption Traders" />
                       
                    {/* </a> */}
                </div>
                <div className="nav-links">
                {['Home', 'About', 'Contact'].map((item, index) => (
                <a 
                    key={index} 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="nav-item"
                >
                    {item}
                    <span className="hover-border"></span>
                </a>
                ))}
                </div>
                <div className="demo-button">
                    <a href="https://wa.me/+918000489090" className="request-button">
                        Request a Live Demo Call
                    </a>
                </div>
                {/* <div className="menu-icon">
                    <button>
                        <svg className="icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div> */}
            </div>
        </nav>
    );
};

export default NavigationBar;
