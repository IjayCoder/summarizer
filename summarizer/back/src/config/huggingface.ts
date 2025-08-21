const API_KEY = process.env.HUGGINGFACE_API_KEY;

export const summarizeText = async (text: string, summaryLength: number) => {
  try {
    const res = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
          parameters: {
            max_length: summaryLength, // 👈 utilise bien summaryLength
            min_length: Math.floor(summaryLength / 2),
            do_sample: false,
          },
        }),
      }
    );

    const result = await res.json();
    console.log("🔍 Réponse brute de HuggingFace:", result);

    if (!res.ok) {
      throw new Error(`Erreur API: ${res.status} ${res.statusText}`);
    }

    return result[0]?.summary_text || "Summary not available";
  } catch (error) {
    console.error("Erreur lors du résumé:", error);
    return "Impossible de générer un résumé";
  }
};
