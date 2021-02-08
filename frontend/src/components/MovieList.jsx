import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";
import api from "../services/api";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const moviesEndpoint = "/movies";

  const fetchMovies = async () => {
    try {
      const { data } = await api.get(moviesEndpoint);
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => fetchMovies(), []);

  const handleAddMovie = async (title) => {
    try {
      const movie = { title };
      const { data: savedMovie } = await api.create(moviesEndpoint, movie);
      setMovies([...movies, savedMovie]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMovie = async (movie) => {
    try {
      await api.remove(moviesEndpoint + "/" + movie._id);
      setMovies(movies.filter((m) => m !== movie));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MovieForm onAddMovie={handleAddMovie} />
      <ul className="MovieList">
        {movies.map((movie) => (
          <li key={movie._id}>
            <Movie movie={movie} onDeleteMovie={handleDeleteMovie} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
