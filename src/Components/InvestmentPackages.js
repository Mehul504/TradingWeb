import React from 'react';
import Image from "../asserts/lensimage.a35d5859c18047d97df9.jpg"
const InvestmentPackages = () => {
    return (
        <div className="py-5 container-fluid" style={{ backgroundColor: "rgb(249, 249, 249)" }}>
            <div className="text-center mb-5 row">
                <div className="col">
                    <p className="display-4" style={{ color: "black" }}>
                        Discover Untapped Potential: Access expertly researched services with comprehensive guidance and support.
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
                    <h4>Make Smart Investments with Our Budget-Friendly Packages for Optimal Trading Success.</h4>
                    <p>
                    Explore our carefully crafted packages, each offering a distinct mix of features and advantages. Whether you're new to trading and need guidance or a seasoned trader looking for advanced tools, our options are designed to enhance your trading journey. Select the package that fits your goals and start trading with confidence.
                    </p>
                    {/* <button 
                        type="button" 
                        className="btn btn-primary btn-lg" 
                        style={{ background: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)",marginTop:"40px"}}
                    >
                        Explore Packages
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default InvestmentPackages;
