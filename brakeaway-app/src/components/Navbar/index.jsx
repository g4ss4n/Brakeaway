import React from "react";
import "./style.css";
import logo1 from "../../assets/images/Logo1.png";
import logo2 from "../../assets/images/Logo2.png";

export default class Navbar extends React.Component {

  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };

  container = React.createRef();
state = {
  open: false,
};

handleClickOutside = event => {
  if (this.container.current && !this.container.current.contains(event.target)) {
    this.setState({
      open: false,
    });
  }
};

componentDidMount() {
  document.addEventListener("mousedown", this.handleClickOutside);
}
componentWillUnmount() {
document.removeEventListener("mousedown", this.handleClickOutside);
}

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
          <div className="iconcontainer" ref={this.container}>
            <button type="button" class="icon" onClick={this.handleButtonClick}>
              ☰
            </button>
{this.state.open && (
  <div class="dropdown">
    <ul>
      <li > <a href="#home">Home</a></li>
      <li > <a href="#about">About Us</a></li>
      <li > <a href="#pb">Potential Benifits</a></li>
      <li > <a href="#partner">Partner With Us</a></li>
      <li > <a href="#team">Team</a></li>
      <li > <a href="#contact">Contact Us</a></li>
    </ul>
  </div>
)}
          </div>
        </div>
      </section>
    );
  }
}
