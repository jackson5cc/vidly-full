import React from "react";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import "./App.css";

function App() {
  const handleAddMovie = (x) => console.log(x);

  return (
    <div className="App">
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList />
    </div>
  );
}

export default App;
