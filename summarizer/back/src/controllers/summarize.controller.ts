import { Request, Response } from "express";
import { summarizeText } from "../config/huggingface";
import { summarySchema } from "../config/schema/summarizer.schema";

export const summarize = async (req: Request, res: Response) => {
  const parsed = summarySchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten() });
  }

  const { text, summaryLength } = parsed.data;

  try {
    const summary = await summarizeText(text, summaryLength);

    res.status(200).json({ summary });
  } catch (error) {
    res.status(500).json({ messag: "Internal server error" });
  }
};
