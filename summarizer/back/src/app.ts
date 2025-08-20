import express from "express";
import cors from "cors";

export const app = express();

app.use(express.json());

app.use(cors());

app.use("/", (req, res) => {
  res.status(404).send("route not found");
});
