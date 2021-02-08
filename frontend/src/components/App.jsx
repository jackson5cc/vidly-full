import React, { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import api from "../services/api";
import "./App.css";

function App() {
  const moviesEndpoint = "/movies";
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const { data } = await api.get(moviesEndpoint);
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddMovie = async (title) => {
    try {
      const movie = { _id: Date.now(), title };
      setMovies([...movies, movie]);

      const { data: savedMovie } = await api.create(moviesEndpoint, movie);

      setMovies([...movies, savedMovie]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMovie = async (movie) => {
    try {
      setMovies(movies.filter((m) => m !== movie));
      await api.remove(moviesEndpoint + "/" + movie._id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => fetchMovies(), []);

  return (
    <div className="App">
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;
