import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import Image from "../asserts/carousel-1.e41cf1e4b931b5edb8b0.jpg"
const About = () => {
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
          About Us
        </h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item" >
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active text-secondary">About</li>
        </ol>
      </div>
    </div>
        <WhyChooseUs/>
        </>
    
    )
};

export default About;