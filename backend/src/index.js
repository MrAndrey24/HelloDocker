import express, { Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import gameRouter from "./routes/game.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const url = process.env.DB_URL;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected to MongoDB");
  } catch (e) {
    console.log("Failed to connect to MongoDB: " + e);
  }
};

connectMongoDb();

app.use("/api/v1/games", gameRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
