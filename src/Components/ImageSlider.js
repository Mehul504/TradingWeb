
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../asserts/finance2.c9894d286728252258f1.webp"
import Image2 from "../asserts/sotbanner.8ed3ad3c3a482b3992b3.jpg"
const ImageSlider = (props) => {
  const images = [
    Image1,
    Image2
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={props.isMobile ? "slider-item-mobile" : "slider-item"}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;