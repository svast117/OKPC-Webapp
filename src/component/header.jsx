import React from 'react';
import { Link } from 'react-router-dom';
import cLogo from "../images/Logo1.png";
import bLogo from "../images/Logo2.png";
import '../styles.css';


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <img src = {cLogo} class = "circleLogo" alt = "Circle Logo"/>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <img src = {bLogo} class = "barLogo" alt = "Bar Logo" id = "right"/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
