import React from "react";
import "./style.css";
import sheraz from "../../assets/images/sheraz.jpeg";
import basel from "../../assets/images/basel.jpeg";

export default class Team extends React.Component {
  render() {
    return (
      <section className="team">
        <h1 className="title3">Team</h1>
        <section className="teamcontainer">
          <div className="tdiv">
            <img src={sheraz} alt="timage" className="timage" />
            <p className="name">Sheraz Faraj</p>
            <p>CEO</p>
            <p>Co-Founder</p>
          </div>
          <div className="tdiv">
            <img src={basel} alt="timage" className="timage" />
            <p className="name">Bassel Hamoud</p>
            <p>CTO</p>
            <p>Co-Founder</p>
          </div>
        </section>
      </section>
    );
  }
}
