import React from "react";
import "./style.css";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div>
          <h3 className="footer1">Email - contact@brakeaway.co</h3>
          <h3 className="footer1">Tel - +972 50-887-5257</h3>
          <h3 className="footer1">
            Designed by Ghassan Gharzuzy - g4ss4n@gmail.com
          </h3>
        </div>
        <div className="image"></div>
      </section>
    );
  }
}
