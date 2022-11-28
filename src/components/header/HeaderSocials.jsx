import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import "./header.css";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/tarun-negi-232258200/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/tarunnegi196" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/pahadi_brat204/" target="_blank"><FiInstagram/></a>
    </div>
  );
};

export default HeaderSocials;
