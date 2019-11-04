import React from "react";
import "./style.css";
import ba from "../../assets/images/brakeawayblack.png";

export default class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="logo-sec">
          <img src={ba} alt="logo" className="logo2" />
        </div>
        <h2 className="description">
          Artificial Intelligence (AI) Based Overuse Injury Detection and Foot
          Analysis.
        </h2>
        <h1> ⌵ </h1>
      </section>
    );
  }
}
