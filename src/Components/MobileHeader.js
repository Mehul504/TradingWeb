import { useState } from "react";
import Logo1 from "../asserts/WhatsApp Image 2025-03-30 at 11.03.20 AM.jpeg"
import Logo from "../asserts/—Pngtree—flat ellipsis_4611234.png"
export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
      <img src={Logo1} alt="Stockoption Traders" width={66}/>
              <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <img src={Logo} width={40} />
        </button>
      </header>
      {isOpen && (
        <div className="menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
    
                    <a href="https://wa.me/+918000489090" className="request-button" style={{margin: '10px'}}>
                        Request a Live Demo Call
                    </a>
           
        </div>
      )}
      <style jsx>{`
        .header {
         display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 15px;
        color: white;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .menu-btn {
          background: none;
          border: none;
          font-size: 2rem;
          color: white;
          cursor: pointer;
        }
        .menu {
          background: white;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          padding: 15px;
          width: 100%;
          text-align: start;
          top: 60px;
          left: 0;
        }
        .menu a {
          display: block;
          padding: 10px;
          text-decoration: none;
          color: black;
          font-weight: bold;
        }
        .menu a:hover {
          background: #f1f1f1;
        }
      `}</style>
    </>
  );
}
