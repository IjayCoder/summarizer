import { Request, Response } from "express";
import client from "../config/openai";

export async function summarizeText(req: Request, res: Response) {
  try {
    // Validation avec Zod
    const { text, wordCount } = summarizeSchema.parse(req.body);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes text.",
        },
        {
          role: "user",
          content: `Summarize this text in about ${wordCount} words:\n\n${text}`,
        },
      ],
    });

    const summary = completion.choices[0].message.content;
    res.json({ summary });
  } catch (error: any) {
    if (error.errors) {
      // Erreurs de validation Zod
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
}
