import React, { useEffect, useState } from "react";
import { use } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Searchpage = ({
  setMovieValue,
  movieValue,
  setSearchValue,
  searchValue,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(movieValue);
  }, [movieValue]);
  useEffect(() => {
    setSearchValue("");
  }, []);
  const handleSearch = async () => {
    if (searchValue.trim() === "") {
      return;
    } else {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=4f38bf41&s=${searchValue}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          // console.log(data);
          setMovieValue(data.Search);
          // console.log(movieValue);
          navigate("/cards");
        } else {
          console.log("No movies are found");
        }
      } catch (error) {
        console.log("API error :", error);
      }
    }
  };

  return (
    <div className="bg-primary w-full min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h2 className="text-secondary text-4xl sm:text-5xl font-bold mb-4">
        MovieFinder
      </h2>
      <p className="text-white text-base sm:text-lg max-w-xl mb-6">
        Discover the latest, trending, and top-rated movies at your fingertips.
        Search and save your favorites for later.
      </p>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="w-full px-4 py-2 rounded bg-white text-black outline-none"
          placeholder="Search movies here"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Link>
          <button
            className="bg-secondary text-black px-6 py-2 rounded hover:bg-yellow-400 transition-all hover:cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Searchpage;
