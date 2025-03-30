import React ,{ useEffect, useState }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';

// Pages
import Home from './Components/Home'
import About from './Components/About'
import Header from './Components/Header';
import Contact from './Components/Contact'
import InvestmentPackages from './Components/InvestmentPackages';
import MobileHeader from './Components/MobileHeader';

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check screen size on mount and on window resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

 console.log("isMobile",isMobile)

  return (
    <Router>
      {
        isMobile ? '' :   <Header isMobile ={isMobile}/>
      }
       {
         isMobile ?  <MobileHeader/> :   <NavigationBar isMobile ={isMobile}/>
       }
    
      <Routes>
        <Route path="/" element={<Home  isMobile ={isMobile}/>} />
        <Route path="/about" element={<About  isMobile ={isMobile}/>} />
        <Route path="/contact" element={<Contact isMobile ={isMobile}/>} />
      </Routes>
      <InvestmentPackages isMobile ={isMobile}/>
      <Footer isMobile ={isMobile}/>
    </Router>
  );
}

export default App;