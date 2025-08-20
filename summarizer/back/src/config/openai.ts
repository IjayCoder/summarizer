import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const API_KEY = process.env.DEEPAI_API_KEY; // stockée dans ton .env

app.post("/summarize", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await axios.post(
      "https://api.deepai.org/api/summarization",
      { text },
      { headers: { "api-key": API_KEY } }
    );

    res.json({ summary: response.data.output });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
