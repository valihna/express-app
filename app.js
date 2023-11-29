const express = require("express");

const app = express();

const port = 6001;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const getMovies = (req, res) => {
  res.status(200).json(movies);
};
const moviesList = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/api/movies", (req, res) => {
  res.send(movies);
  console.log(req.query);
});

app.get("/api/movies/:id", (req, res) => {
  const result = movies.find((c) => c.id === parseInt(req.params.id));
  if (!result) res.status(404).send("error");
  res.send(result);
});

app.get("/api/title/:title", (req, res) => {
  const resultat = movies.find((c) => c.title === req.params.title);
  if (!resultat) {
    return res.status(404).send("Movie not found");
  }
  res.send(resultat);
});
