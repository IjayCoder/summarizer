const API_KEY = process.env.HUGGINGFACE_API_KEY;
const HUGGINGFACE_URL = process.env.HUGGINGFACE;

export const summarizeText = async (text: string, summaryLength: number) => {
  try {
    const res = await fetch(`${HUGGINGFACE_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        inputs: text,
        parameters: {
          max_length: summaryLength,
          min_length: Math.floor(summaryLength / 2),
          do_sample: false,
        },
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(`Erreur API: ${res.status} ${res.statusText}`);
    }

    return result[0]?.summary_text || "Summary not available";
  } catch (error) {
    return "Unable to generate a summary";
  }
};
