import React from "react";
import portfolio from "../assets/portfolio.png";
import realestate from "../assets/realEstate.png";
import bookstore from "../assets/bookstore.png";
const Projects = () => {
  const ProjectJson = [
    {
      title: "Portfolio",
      img: portfolio,
      desc: "This is my portfolio website",
      link: "https://github.com/siddharth-sah/myPortfolio",
    },
    {
      title: "Real Estate",
      img: realestate,
      desc: "This is the real estate website",
      link: "https://github.com/kuldeepgohel/realEstate",
    },
    {
      title: "Book Store",
      img: bookstore,
      desc: "This is the book store website",
      link: "https://github.com/kuldeepgohel/BookStore",
    },
  ];
  return (
    <>
      <div className="relative" id="projects">
        projects
      </div>
    </>
  );
};

export default Projects;
