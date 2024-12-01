const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let games = [];

// Create a new game
app.post("/games", (req, res) => {
  const game = req.body;
  games.push(game);
  res.status(201).send(game);
});

// Read all games
app.get("/games", (req, res) => {
  res.send(games);
});

// Read a specific game by id
app.get("/games/:id", (req, res) => {
  const game = games.find((g) => g.id === parseInt(req.params.id));
  if (game) {
    res.send(game);
  } else {
    res.status(404).send("Game not found");
  }
});

// Update a game by id
app.put("/games/:id", (req, res) => {
  const gameIndex = games.findIndex((g) => g.id === parseInt(req.params.id));
  if (gameIndex !== -1) {
    games[gameIndex] = req.body;
    res.send(games[gameIndex]);
  } else {
    res.status(404).send("Game not found");
  }
});

// Delete a game by id
app.delete("/games/:id", (req, res) => {
  const gameIndex = games.findIndex((g) => g.id === parseInt(req.params.id));
  if (gameIndex !== -1) {
    games.splice(gameIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Game not found");
  }
});

// Start an AI agent to play games
app.post("/games/:id/start-ai-agent", (req, res) => {
  const game = games.find((g) => g.id === parseInt(req.params.id));
  if (game) {
    // Logic to start AI agent for the game
    res.send(`AI agent started for game ID: ${game.id}`);
  } else {
    res.status(404).send("Game not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
