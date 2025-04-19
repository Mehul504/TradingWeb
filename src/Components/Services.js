import React from "react";
import Image from "../asserts/first-image.png"
import Image2 from '../asserts/secondimage.jpeg'
import Image3 from '../asserts/third-image.png'
const Services = () => {
  return (
    <div className="container-fluid service pb-5">
      <div className=" pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px", visibility: "visible", animationDelay: "0.2s" }}
        >
          <h4 className="text-primary">Why Choose Vkstock Vision Services?</h4>
        </div>
        <div className="container overflow-hidden">
        <div className="row g-4">
          {/* Service 1 */}
          <div
            className="col-md-6 col-lg-4 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s" }}
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src={Image}
                  className="img-fluid rounded-top w-100"
                  alt="Complete Support on Daily Basis"
                />
              </div>
              <div className="rounded-bottom p-4">
                <div className="h4 d-inline-block mb-4" style={{ textDecoration: "none" }}>
                  Complete Support on Daily Basis
                </div>
                <p className="mb-4">Get 24/7 support for all your trading needs.</p>
                
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="col-md-6 col-lg-4 wow fadeInUp"
            data-wow-delay="0.4s"
            style={{ visibility: "visible", animationDelay: "0.4s" }}
          >
            <div className="service-item">
              <div className="service-img">
                <img
                 src={Image3}
                  className="img-fluid rounded-top w-100"
                  alt="SEBI Registered"
                />
              </div>
              <div className="rounded-bottom p-4">
                <div className="h4 d-inline-block mb-4" style={{ textDecoration: "none" }}>
                  SEBI Registered
                </div>
                <p className="mb-4">We are fully SEBI registered to ensure secure and compliant trading.</p>
               
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="col-md-6 col-lg-4 wow fadeInUp"
            data-wow-delay="0.6s"
            style={{ visibility: "visible", animationDelay: "0.6s" }}
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src={Image2}
                  className="img-fluid rounded-top w-100"
                  alt="Risk Managed Calls with Target and Stop Loss"
                />
              </div>
              <div className="rounded-bottom p-4">
                <div className="h4 d-inline-block mb-4" style={{ textDecoration: "none" }}>
                  Risk Managed Calls with Target and Stop Loss
                </div>
                <p className="mb-4">Our calls come with clear risk management guidelines to protect your investment.</p>
              
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
