import React from "react";
import "./style.css";
import logo1 from "../../assets/images/Logo1.png";
import logo2 from "../../assets/images/Logo2.png";


export default class Navbar extends React.Component {
  render() {
    return (
      <section className="main-nav">
        <div className="logo-section">
          <img src={logo1} alt="logo" className="logo" />
          <img src={logo2} alt="logo" className="logo" />
        </div>
        <div className="menu-section">
          <a href="#home">Home</a> <a href="#about">About Us</a>{" "}
          <a href="#pb">Potential Benifits</a>
          <a href="#partner">Partner With Us</a> <a href="#team">Team</a>{" "}
          <a href="#contact">Contact Us</a>
        </div>
        <div>
        </div>
      </section>
    );
  }
}
