import React from "react";
import "./style.css";

export default class About extends React.Component {
  render() {
    return (
      <section className="about">
        <div className="div1">
          <h1 className="title">About Us</h1>
          <h3 className="description2">
            We are developing an artificial intelligence (AI) based, plantar
            pressure measurement that turns smart devices into overuse injury
            detection and assessment tools for radiologists and physicians. ​
          </h3>
          <h3 className="description2">
            Brakeaway aims to detect injuries in their early stages and thus
            reduce the rehabilitation time for patients.
          </h3>
        </div>
        <div className="image"></div>
      </section>
    );
  }
}
