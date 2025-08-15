import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const goToSingleMovieCard = (id) => {
    navigate(`movie/${id}`);
  };
  return (
    <div
      id={movie.imdbID}
      className="w-48 h-auto flex flex-col items-center rounded-md border p-2 bg-white shadow hover:cursor-pointer"
      onClick={(e) => goToSingleMovieCard(e.currentTarget.id)}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-32 h-48 object-fill rounded"
      />
      <h4 className="mt-2 text-lg font-semibold text-center">{movie.Title}</h4>
      <p className="text-sm text-gray-600">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
