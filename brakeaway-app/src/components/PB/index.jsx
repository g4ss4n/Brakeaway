import React from "react";
import "./style.css";

export default class PB extends React.Component {
  render() {
    return (
      <section className="pb">
        <div className="div1">
          <h1 className="title2">Potential Benifits</h1>
          <h3 className="description3">
            Detecting overuse injuries in their early stages can reduce the
            rehabilitation time and cost, especially for athletes.
          </h3>
          <h3 className="description3">
            Foot analysis can point to motor and other developmental issues.
          </h3>
        </div>
        <div className="image"></div>
      </section>
    );
  }
}
