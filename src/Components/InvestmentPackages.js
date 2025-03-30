import React from 'react';
import Image from "../asserts/lensimage.a35d5859c18047d97df9.jpg"
const InvestmentPackages = () => {
    return (
        <div className="py-5 container-fluid" style={{ backgroundColor: "rgb(249, 249, 249)" }}>
            <div className="text-center mb-5 row">
                <div className="col">
                    <p className="display-4" style={{ color: "black" }}>
                        Uncover Hidden Opportunities: Tap into well-researched services with proper guidance and support.
                    </p>
                </div>
            </div>
            <div className="align-items-center row">
                <div className="d-flex justify-content-center col-lg-6">
                    <img 
                        src={Image}
                        alt="Magnifying Glass with Charts" 
                        className="img-fluid" 
                        style={{ maxWidth: "80%", borderRadius: "5px" }}
                    />
                </div>
                <div className="text-center text-lg-start col-lg-6">
                    <h4>Invest Wisely with our Affordable Package Options for Maximum Trading Potential</h4>
                    <p>
                        Explore our thoughtfully curated options, each offering a unique combination of features and benefits. Whether you're a beginner 
                        seeking guidance or an experienced trader, our packages are tailored to empower your trading experience. Choose the package that 
                        aligns with your goals and dive into the world of trading with confidence.
                    </p>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-lg" 
                        style={{ background: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)",marginTop:"40px"}}
                    >
                        Explore Packages
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentPackages;
