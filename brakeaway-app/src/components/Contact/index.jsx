import React from "react";
import "./style.css";

export default class Contact extends React.Component {
  render() {
    return (
      <section className="dcontainer">
        <div className="div1">
          <h1 className="title">Contact Us</h1>
          <h3 className="description2">
Contact us via email or phone 
          </h3>
          <h3 className="description2">Email - <a href="mailto: contact@brakeaway.co">contact@brakeaway.co</a></h3>
          <h3 className="description2">Phone - <a href="tel: +972508875257">+972 50-887-5257</a></h3>
        </div>
        <div className="image"></div>
      </section>
    );
  }
}