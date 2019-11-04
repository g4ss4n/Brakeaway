import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import PB from "./components/PB";
import Partner from "./components/Partner";
import Team from "./components/Team";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <a name="home">
          <section className="pad"> 
          </section>
          {" "}
          <Home />{" "}
        </a>
        <a name="about">
        <section className="pad"> 
          </section>
          <About />
        </a>
        <a name="pb">
          {" "}
          <section className="pad"> 
          </section>
          <PB />
        </a>
        <a name="partner">
        <section className="pad"> 
          </section>
          <Partner />
        </a>
        <a name="team">
        <section className="pad"> 
          </section>
          <Team />
        </a>
        <a name="contact">

          <Contact />
        </a>
        <Footer />
      </div>
    </div>
  );
}

export default App;
