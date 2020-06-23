import React from "react";
import { Link } from "react-router-dom";

import contactImg from "../../assets/contact.jpg";
import icons from "../../assets/contact.png";

import "./contact.style.css";
const Contact = () => {
  return (
    <div className="container">
      <h2>Contact</h2>
      <div className="contact-section">
        <h3 className="email">myportfolio@gmail.com</h3>
        <div className="icons">
          <img className="social-icons" src={icons} alt="" />
        </div>
        <div className="contact-image">
          <img className="contact-img" src={contactImg} alt="" />
        </div>
      </div>
      <Link to="/">
        {" "}
        <button className="btn contact-btn">Home</button>
      </Link>
    </div>
  );
};

export default Contact;
