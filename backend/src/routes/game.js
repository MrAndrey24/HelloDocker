import express from "express";
import Game from "../models/game.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const findGames = await Game.find();
  res.send(findGames);
});

router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const game = await Game.create(body);
    res.send(game._id);
  } catch (e) {
    console.log(e);
  }
});

export default router;
