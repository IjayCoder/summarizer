import { z } from "zod";

export const summarySchema = z.object({
  //Here we check if the text's content is at least 300 word
  //We split the text by spaces (using \s+ to cover multiple spaces, tabs, etc.)
  //// If the word count is not between 150 and 5000, we return a clear error message.
  text: z.string().refine(
    (val) => {
      const wordCount = val.split(/\s+/).length;
      return wordCount >= 150 && wordCount <= 5000;
    },
    {
      message: "The text should have between 300 and 5000 words",
    }
  ),

  // This field validates the requested summary length.
  // It makes sure the summary length is at least 50 words.
  // If the number is too small, it triggers the error message.
  summaryLength: z
    .number()
    .min(50, "The summary length should be at least 50 words"),
});
