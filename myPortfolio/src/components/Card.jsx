import React from "react";
import github from "../assets/Github.png";

const Card = ({ items }) => {
  return (
    <>
      <div className="border border-red-500 rounded-lg w-[350px] lg:w-[480px] bg-red-50 mx-auto lg:mx-4">
        <img src={items.img} alt="" className="rounded-lg" />
        <div className="p-4">
          <h1 className="font-semibold text-xl mb-2">{items.title}</h1>
          <p>{items.desc}</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-black text-white px-3 py-2 rounded-md">
              <a href={items.link} target="_blank" className="flex gap-1">
                <img src={github} alt="" className="w-6" /> Github Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
