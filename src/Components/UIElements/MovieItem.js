import React from "react";
import "./MovieItem.css";
import { Grade, People } from "@material-ui/icons";

const TopMovieItem = ({ movie }) => {
  return (
    <div className="card movie-card p-3">
      <h4 className="py-2 m-0 text-dark">{movie.title}</h4>
      <hr className="m-0" />
      <p className="h-10 text-secondary pb-2 overflow-auto">{movie.overview}</p>
      <div className="d-flex">
        <div className="">
          <Grade />
          {movie.vote_average}
        </div>
        <span className="flex-1" />
        <div className="">
          <People />
          {movie.vote_count}
        </div>
      </div>
    </div>
  );
};

export default TopMovieItem;
