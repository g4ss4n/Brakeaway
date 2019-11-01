import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

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
      </div>
    </div>
  );
}

export default App;
