import React from "react";
import portfolio from "../assets/portfolio.png";
import realestate from "../assets/realEstate.png";
import bookstore from "../assets/bookstore.png";
import Card from "./Card";
const Projects = () => {
  const ProjectJson =[
    {
      id: 1,
      title: "Portfolio",
      img: portfolio,
      desc: "A personal website to showcase my skills, projects, and expertise.",
      link: "https://github.com/kuldeepgohel/Portfolio-Web",
    },
    {
      id: 2,
      title: "Real Estate",
      img: realestate,
      desc: "A platform for browsing and exploring real estate properties.",
      link: "https://github.com/kuldeepgohel/realEstate",
    },
    {
      id: 3,
      title: "Book Store",
      img: bookstore,
      desc: "An e-commerce site for buying and selling books online.",
      link: "https://github.com/kuldeepgohel/BookStore",
    },
  ];
  
  return (
    <>
      <div id="projects" className="relative bg-gray-700 py-10 px-4">
        <div className="mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
            My Projects
          </h2>
          <div className="flex flex-col gap-8 lg:flex-row place-items-center  ">
            {ProjectJson.map((item) => {
              return <Card items={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
