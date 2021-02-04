const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Movie = require("./models/movie");
const config = require("./config/" + (process.env.NODE_ENV || "development"));
console.log(config);

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect(config.db.uri , { useUnifiedTopology: true, useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.log);

app.get("/", (req, res) => {
  res.send("<h1>App is running!!!!</h1>");
});

app.get("/movies", async (req, res) => {
  // const movies = await Movie.find();
  const movies = [
    { _id: 1, title: "Movie1" },
    { _id: 2, title: "Movie2" },
  ];
  res.send(movies);
});

app.post("/movies", async (req, res) => {
  if (!req.body.title) return res.status(400).send("Title is required.");

  const movie = new Movie({ title: req.body.title });
  await movie.save();
  res.send(movie);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
