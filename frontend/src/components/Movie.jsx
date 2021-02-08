import React from "react";

function Movie({ movie, onDeleteMovie }) {
  return (
    <>
      {movie.title}
      <button className="delete" onClick={() => onDeleteMovie(movie)}>
        <img src="/images/delete.svg" alt="Delete movie" />
      </button>
    </>
  );
}

export default Movie;
