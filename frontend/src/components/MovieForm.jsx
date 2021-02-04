import React, { useState } from "react";

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="form-control"
        placeholder="Add a new movie..."
        type="text"
        value={title}
      />
    </form>
  );
}

export default MovieForm;
