import React from 'react';
import Image from "../asserts/mm-01.png"

const Footer = (props) => {
    console.log(' props.isMobile ', props.isMobile )
    return (
        <footer className="footer" style={
            props.isMobile ? {display :"none"} :{ display :"block"}
        }>
            <div className="container">
                <div className="footer-section">
                    <a href="/">
                        <img src={Image} alt="Vkstock Vision" className="footer-logo" />
                    </a>
                    <p>
                    MM Trading delivers expert analysis and customized strategies to help you navigate the financial markets with confidence. Our dedicated team equips you with the essential tools and insights needed to make smart, informed investment choices.
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