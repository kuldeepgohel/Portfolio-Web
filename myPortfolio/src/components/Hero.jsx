import React from "react";
import hero from "../assets/hero.png";
import Facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reactlogo from "../assets/React.png";
import javascript from "../assets/js.png";
import java from "../assets/java.svg";
import CSS from "../assets/CSS.png";
import bootstrap from "../assets/bootstrap.png";
import tailwindcss from "../assets/tailwindcss.png";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
              <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
                Hi There, <br />
                I'm Kuldeep{" "}
                <span className="text-red-500 underline ">Gohel</span>
              </h1>
              <p className="md:text-2xl text-xl mb-4 font-bold">
                Full Stack Developer
              </p>
              <p className="mb-4 text-xl text-justify">
                I'm a passionate MERN stack developer with expertise in Backend
                (Node.js) and modern full-stack technologies. I love creating
                efficient, scalable, and user-friendly applications that deliver
                exceptional experiences.
              </p>
            
            </div>
            <div className="md:w-1/2 flex justify-center lg:justify-center items-center relative">
              <img
                src={hero}
                alt="hero"
                className="lg:h-[80vh] h-96 object-contain lg:mt-0"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-40 right-10  hidden bg-gray-200 md:flex flex-col gap-5 rounded-full cursor-pointer ">
          <a href="">
            <img src={Facebook} alt="" className="w-20" />
          </a>
          <a href="">
            <img src={instagram} alt="" className="w-20" />
          </a>
          <a href="https://x.com/kuldeepGohel7" target="_blank">
            <img src={twitter} alt="" className="w-20" />
          </a>
          <a href="https://www.linkedin.com/in/kuldeep-gohel-075323228/" target="_blank">
            <img src={linkedin} alt="" className="w-20" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
