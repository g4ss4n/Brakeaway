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
          <p>Home</p> <p>About Us</p> <p>Potential Benifits</p>
          <p>Partner With Us</p> <p>Team</p> <p>Contact Us</p>
        </div>
      </section>
    );
  }
}
