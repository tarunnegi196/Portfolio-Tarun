import React from "react";
import "./header.css";

import CTA from "./CTA";
import ME from '../../assets/ME.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tarun Negi</h1>
        <h5 className="text-light">Front End Developer <br/>ML Enthusiast</h5>
        <CTA/>
        <HeaderSocials/>
         <div className="me">
          <img src={ME} alt="" />
         </div>
         <a href="#about" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
