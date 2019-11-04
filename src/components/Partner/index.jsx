import React from "react";
import "./style.css";

export default class Partner extends React.Component {
  render() {
    return (
      <section className="dcontainer">
        <div className="div1">
          <h1 className="title">Partner With Us</h1>
          <h3 className="description2">
            We are two highly skilled engineers specializing in AI and signal
            processing work passionately to reduce the rate of injuries among
            athletes and other people. As a growing company we value
            collaboration with others that have a similar vision.
          </h3>
          <h3 className="description2">
            BrakeAway will offer its injury detecting and foot analysis software
            for integration into every smart device in clinics.
          </h3>
        </div>
        <div className="image"></div>
      </section>
    );
  }
}
