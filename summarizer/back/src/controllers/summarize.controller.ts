import { Request, Response } from "express";
import { summarizeText } from "../config/huggingface";
import { summarySchema } from "../schema/summarizer.schema";

export const summarize = async (req: Request, res: Response) => {
  const parsed = summarySchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten() });
  }

  const { text, summaryLength } = parsed.data;

  try {
    if (!text || !summaryLength) {
      res.status(400).json({ message: "Fill all the fields" });
      return;
    }
    const summary = await summarizeText(text, summaryLength);

    res.status(200).json({ summary });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
