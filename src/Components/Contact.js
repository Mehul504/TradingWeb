import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import Image from "../asserts/carousel-1.e41cf1e4b931b5edb8b0.jpg"
const Contact= (props) =>{
    return (
        <>
         <div className="container-fluid bg-breadcrumb" style={{
        background: `linear-gradient(#000000b3, #000000b3), url(${Image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>s
      <div className=" text-center py-5" >
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
        Contact Us
        </h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item" >
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active text-secondary">
          Contact
          </li>
        </ol>
      </div>
    </div>
    <div className="contact-section">
    <div className={ props.isMobile ? 'm-3' : 'm-5'}>
        <div className="wrapper">
          {/* Left Side: Contact Details */}
          <div className="col-xl-6 contact-info">
            <h4 className={props.isMobile ? 'section-title-mobile' : "section-title"}>Get in Touch</h4>
            <div className={ props.isMobile ? 'contact-due-mobile ' :'contact-due'}>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h5>Address</h5>
                <p className='p-tag'>Mumbai</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h5>Mail Us</h5>
                <p className='p-tag'>info@vkstockvission.com</p>
              </div>
            </div>
            </div>

            <div className={ props.isMobile ? 'contact-due-mobile ' :'contact-due'}>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h5>Telephone</h5>
                <p className='p-tag'>+91 8000489090</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-globe"></i>
              <div>
                <h5>Website</h5>
                <p className='p-tag'>www.vkstockvission.com</p>
              </div>
            </div>
            </div>
            <div className={ props.isMobile ? 'contact-due-mobile ' :'contact-due'}>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h5>Working  ours</h5>
                <p className='p-tag'>
                  <strong>Monday to Saturday:</strong> 09:00 AM - 06:00 PM
                  <br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
        </>
    
    )
};

export default Contact;