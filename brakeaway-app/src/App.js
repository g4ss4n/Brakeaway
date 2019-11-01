import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import PB from "./components/PB";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <a name="home">
          {" "}
          <Home />{" "}
        </a>
        <a name="about">
          <About />
        </a>
        <a name="pb">
          {" "}
          <PB />
        </a>
        <Footer />
      </div>
    </div>
  );
}

export default App;
