import React from "react";
import Navbar from "./components/Navbar";
import  Hero from "./components/Hero";
import Particle from "./components/Particle";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Particle/> 
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  );
};

export default App;
