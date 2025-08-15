import React from "react";
import MovieCard from "./MovieCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Cards = ({ movieValue, searchValue }) => {
  const navigate = useNavigate("");
  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-start items-center">
        <div
          className="w-fit ml-2 mt-2.5 p-1.5 rounded flex hover:cursor-pointer justify-start items-center hover:bg-gray-200 text-xl"
          onClick={goBack}
        >
          <FaArrowLeft className="mx-0.5 " />
          <p className="ml-2 font-medium select-none">Back</p>
        </div>
        <div className="flex flex-col items-center w-full mt-4">
          <h3 className="text-center font-semibold text-xl">
            You Searched for "{searchValue}"
          </h3>
        </div>
      </div>
      <div className="w-full my-5 px-4 py-2 grid grid-cols-3 gap-4 items-center justify-center">
        {movieValue.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Cards;
