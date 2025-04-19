import React from 'react';


const Footer = (props) => {
    console.log(' props.isMobile ', props.isMobile )
    return (
        <footer className="footer" style={
            props.isMobile ? {display :"none"} :{ display :"block"}
        }>
            <div className="container">
                <div className="footer-section">
                    <a href="/">
                        <img src="/static/media/stockoption1.231d4ac9e944108d467e.png" alt="Vkstock Vision" className="footer-logo" />
                    </a>
                    <p>
                        Vkstock Vision offers expert insights and tailored strategies for navigating the financial markets.
                        Our team is dedicated to providing you with the tools and knowledge to make informed investment decisions.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                  
                    <a href="/contact">Contact Us</a>
                </div>
                {/* <div className="footer-section">
                    <h4>Support</h4>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/tandc">Terms & Conditions</a>
                    <a href="/legal-disclaimer">Legal Disclaimer</a>
                    <a href="/refund-policy">Refund Policy</a>
                </div> */}
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>Mumbai</p>
                    <p>Email: mmtrading504@gmail.com</p>
                    <p>Phone: +919875094908</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;