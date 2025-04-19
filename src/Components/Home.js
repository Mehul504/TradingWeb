import React from 'react';
import ImageSlider from '../Components/ImageSlider';
import AccordionDemoForm from '../Components/AccordionDemoForm';
import WhyChooseUs from '../Components/WhyChooseUs';
import Services from '../Components/Services';

const Home = (props) => {
  return (
    <div>

      <ImageSlider  isMobile ={props.isMobile}/>
      <AccordionDemoForm   isMobile ={props.isMobile}/>
      <WhyChooseUs   isMobile ={props.isMobile}/>
      <Services   isMobile ={props.isMobile}/>
   
    </div>
  );
};

export default Home;