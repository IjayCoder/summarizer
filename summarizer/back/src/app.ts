import express from "express";
import cors from "cors";
import summarizerRoutes from "./routes/summarize.route";

export const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api", summarizerRoutes);

app.use("/", (req, res) => {
  res.status(404).send("route not found");
});
