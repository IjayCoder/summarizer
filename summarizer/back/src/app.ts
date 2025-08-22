import express from "express";
import cors from "cors";
import summarizerRoutes from "./routes/summarize.route";

export const app = express();

app.use(express.json());

app.use(cors({ origin: "https://summarizer.eya.digital/" }));

app.use("/api", summarizerRoutes);

app.use("/", (req, res) => {
  res.status(404).send("route not found");
});
