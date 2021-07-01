import React, { useEffect, useState } from "react";

import { CircularProgress } from "@material-ui/core";
import mounty from "../../../api/mounty";

import MovieItem from "../../UIElements/MovieItem";

const NewMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  const getMovies = async () => {
    const response = await mounty.get("/upcoming");
    console.log(response);
    setLoad(false);
    setMovies(response.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="row col-12 pt-5">
      {movies.length === 0 ? (
        <div className="full-page center">
          {load ? <CircularProgress /> : <p>Sorry!! no movies found</p>}
        </div>
      ) : (
        movies.map((movie) => (
          <div className="my-3 col-lg-3 col-md-4 col-sm-6" key={movie.id}>
            <MovieItem movie={movie} />
          </div>
        ))
      )}
    </div>
  );
};

export default NewMoviesList;
// rs.themoviedb.org/3/movies/get-upcoming
