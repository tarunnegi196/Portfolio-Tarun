import React from "react";
import "./services.css";
import { GiCheckMark } from "react-icons/gi";
const Services = () => {
  return (
    <section id="services">
      <h5>My Learnings</h5>
      <h2>Recent Certifications</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Structures and Algorithms: Deep Dive Using Java</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Arrays</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Linked Lists</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Trees and Hashtables</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Stacks and Queues</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Search And Sort Algorithms</p>
            </li>
          </ul>
        </article>
        {/*END OF 1st */}
        <article className="service">
          <div className="service__head">
            <h3>AWS Academy Data Center Technician</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Motherboards and Processors</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Memory and Storage Drives</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Graphics Cards and Hardware Peripherals</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Operating System</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Memory Management</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Networking Fundamentals</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Data Transmission</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Databases</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Web Development Fundamentals</p>
            </li>
          </ul>
        </article>
        {/*END OF 2nd */}
        <article className="service">
          <div className="service__head">
            <h3>Learn Java Programming Crash Course</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Introduction to Java</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Types and expressions</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Flow Control</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Operators</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Arrays and Strings</p>
            </li>
          </ul>
        </article>
        {/*END OF 3rd */}
      </div>
    </section>
  );
};

export default Services;
