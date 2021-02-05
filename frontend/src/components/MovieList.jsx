import React, { useState, useEffect } from "react";
import x from "../services/movie";
import axios from "axios";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const apiUrl = process.env.API_URL || "http://localhost:3001";
  console.log("ENV:", process.env);
  console.debug("DEBUG:", apiUrl);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(apiUrl + "/movies");
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m !== movie));
  };

  return (
    <>
      <ul className="MovieList">
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title}
            <button className="delete" onClick={() => handleDelete(movie)}>
              <img src="/images/delete.svg" alt="Delete movie" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
