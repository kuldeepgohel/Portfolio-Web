import React from "react";
import Navbar from "./components/Navbar";
import  Hero from "./components/Hero";
import Particle from "./components/Particle";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
    <Particle/> 
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
    </>
  );
};

export default App;
