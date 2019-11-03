import React from "react";
import "./style.css";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="fcon">
        <h3 className="footer1">Email - <a href="mailto: contact@brakeaway.co">contact@brakeaway.co</a></h3>
          <h3 className="footer1">Phone - <a href="tel: +972508875257">+972 50-887-5257</a></h3>
        </div>
        <section className="pad2"> </section>
        <h3 className="footer1">
            Designed by Ghassan Gharzuzy | <a href="g4ss4n@gmail.com">g4ss4n@gmail.com</a>
          </h3>
        <div className="image"></div>
      </section>
    );
  }
}
