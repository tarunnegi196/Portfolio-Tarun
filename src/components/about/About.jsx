import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { SiBookstack } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineBook } from "react-icons/ai";
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiBookstack className="about__icon" />
              <h5>Student</h5>
              <small>SRMIST Chennai</small>
            </article>
            <article className="about__card">
              <HiOutlineCode className="about__icon" />
              <h5>Front End Dev.</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <AiOutlineBook className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            Hey Folks!! Myself Tarun Negi. I am currently persuing Btech From
            SRMIST Chennai. In these 3 years of my Btech I have tried to improve
            my skils in every domain and tried to groom my personality. I Love
            to code because if i can think it,I can make it a reality
            
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
