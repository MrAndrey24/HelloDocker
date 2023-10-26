import mongoose from "mongoose";

const Game = new mongoose.model("Game", {
  name: String,
});

export default Game;
