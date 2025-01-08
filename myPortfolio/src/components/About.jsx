import React from "react";
import mern from "../assets/mernstack.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/JS.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwindcss.png";
import java from "../assets/java.svg";
import bootstrap from "../assets/Bootstrap.png";
import nodejs from "../assets/NodeLogo.png";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.png";
const About = () => {
  return (
    <>
      <div className="relative" id="about">
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className=" underline  text-2xl text-red-600 font-semibold tracking-wide uppercase">
                About Me
              </h2>
              <p className=" text-justify leading-8 tracking-tight text-gray-800  mt-2">
                Hi, I'm Kuldeep Gohel, a passionate Computer Engineering student
                at Gandhinagar Institute of Technology with a strong interest in
                full-stack web development. I specialize in building robust and
                user-friendly applications using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). I enjoy bringing ideas to life
                through code and have hands-on experience working on diverse
                projects, including real estate platforms and bookstore
                management systems. My skills in React.js, Node.js, and modern
                tools like Vite and Tailwind CSS enable me to craft responsive
                and efficient web solutions. I'm eager to continue honing my
                skills and contribute to impactful projects. When I'm not
                coding, you can find me exploring new technologies, solving
                problems, or preparing for exciting opportunities in the tech
                world.
              </p>
              <p className="mt-4 max-w-2xl text-justify text-xl text-gray-800 lg:mx-auto"></p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold underline text-gray-900">
                    My Journey 
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    I started my journey in Full Stack Development with a strong
                    curiosity for creating dynamic and interactive web
                    applications, which led me to explore the MERN stack. Along
                    the way, I have developed several projects that have
                    sharpened my skills in both frontend and backend
                    technologies, fueling my passion for building innovative
                    solutions.
                  </p>
                  <img src={mern} alt="" className="p-2 rounded-lg w-52 mt-4" />
                </div>
                <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8  items-center shadow-lg shadow-blue-300">
                  <h3 className="text-2xl underline font-semibold text-red-600">
                    Skills & Expertise
                  </h3>
                  <div className="flex items-center justify-center flex-wrap gap-3">
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={html} alt="" className="w-10" />
                      <span className="font-semibold">HTML</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={css} alt="" className="w-10" />
                      <span className="font-semibold">CSS</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={js} alt="" className="w-10" />
                      <span className="font-semibold">JavaScript</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={react} alt="" className="w-10" />
                      <span className="font-semibold">Reactjs</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={tailwind} alt="" className="w-10" />
                      <span className="font-semibold">Tailwind CSS</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={java} alt="" className="w-10" />
                      <span className="font-semibold">Java</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={bootstrap} alt="" className="w-10" />
                      <span className="font-semibold">BootStrap</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={nodejs} alt="" className="w-10" />
                      <span className="font-semibold">Nodejs</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={mongodb} alt="" className="w-10" />
                      <span className="font-semibold">MongoDB</span>
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={express} alt="" className="w-10" />
                      <span className="font-semibold">ExpressJs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
