import React from "react";
const WhyChooseUs = () => {
  return (
    <div className="container-fluid about py-5">
      <div className="">
        {/* Heading Section */}
        <div className="text-center mb-5">
          <h4 className="text-primary fw-bold text-uppercase">Why Choose MM Trading?</h4>
          <h2 className="text-dark fw-bold">
            The Trusted <span className="text-primary">Analyzer Firm</span> by Traders
          </h2>
        </div>
       <div className="container overflow-hidden">
       <div className="row align-items-center g-4 " style={{textAlign:"start"}}>
          {/* Left Section - Description */}
          <div className="col-lg-6">
            <h5 className="text-dark fw-bold mb-3">We Offer Services in Options Trading</h5>
            <p className="text-muted mb-4">
              Our research analysts provide recommendations across various segments, including
              <strong> Nifty</strong>, <strong> BankNifty</strong>, <strong> FinNifty</strong>,
              <strong> Midcap</strong>, <strong> Sensex</strong>, and <strong> Bankex</strong>.
              Get real-time, actionable insights to trade like a professional with Vkstock Vission.
            </p>

            <div className="mb-4">
              <h6 className="text-primary fw-bold">Why Choose Us?</h6>
              <ul className="text-muted list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Overlooking the benefits of professional research services?
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Searching for a trustworthy and user-friendly platform for trading in the Indian stock market?
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Fed up with receiving empty promises?
                </li>
                <li>
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Opt for <strong>MM Trading Alerts</strong>—Your primary choice for reliable market guidance.
                </li>
              </ul>
            </div>
            <a href="https://wa.me/+919875094908" className="btn btn-primary rounded-pill py-3 px-5 shadow-sm">
            Get Started Today
                    </a>
          </div>

          {/* Right Section - Video */}
          <div className="col-lg-6 text-center">
            <video className="img-fluid rounded shadow-sm" controls autoPlay loop>
              <source src={'/static/6794223-uhd_3840_2160_30fps.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
       </div>
      

        {/* Features Section */}
        <div className="container overflow-hidden">
        <div className="row g-4 mt-5 text-center">
          <div className="col-md-4">
            <div className="hover-slide">
              <i className="fas fa-chart-line fa-2x mb-3"></i>
              <h5 className="fw-bold">Expert Insights</h5>
              <p>Powered by deep industry knowledge and data-driven analysis you can trust.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="hover-slide">
              <i className="fas fa-balance-scale fa-2x mb-3"></i>
              <h5 className="fw-bold">Straightforward & Practical</h5>
              <p>Smart Tools. Seamless Trades. A platform that makes decision-making faster and easier.</p>

            </div>
          </div>
          <div className="col-md-4">
            <div className="hover-slide">
              <i className="fas fa-users fa-2x mb-3"></i>
              <h5 className="fw-bold">Empowering & Bold</h5>
              <p>Success Through Connection. Trade smarter with a community that's serious about results.</p>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default WhyChooseUs;