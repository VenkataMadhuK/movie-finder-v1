import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-primary w-full flex justify-between items-center">
      <h3
        className="text-secondary text-2xl font-bold p-2 mx-2 hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        MovieFinder
      </h3>
      <div className="flex items-center justify-between">
        <a href="#" className="text-white pr-5 hover:underline ">
          Top
        </a>
        <a href="#" className="text-white pr-5 hover:underline ">
          Recent
        </a>
        <a href="#" className="text-white pr-2 hover:underline ">
          Trending
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
