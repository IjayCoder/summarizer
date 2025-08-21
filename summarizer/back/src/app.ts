import express from "express";
import cors from "cors";
import summarizerRoutes from "./routes/summarize.route";
import dotenv from "dotenv";
dotenv.config();

export const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", summarizerRoutes);

app.use("/", (req, res) => {
  res.status(404).send("route not found");
});
