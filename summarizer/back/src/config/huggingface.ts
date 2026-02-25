const API_KEY = process.env.HUGGINGFACE_API_KEY;
const HUGGINGFACE_URL = process.env.HUGGINGFACE;

/*export const summarizeText = async (text: string, summaryLength: number) => {
  try {
    console.log("je suis la");
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
    console.log("j'ai fait le tour");

    if (!res.ok) {
      throw new Error(`Erreur API: ${res.status} ${res.statusText}`);
    }

    return result[0]?.summary_text || "Summary not available";
  } catch (error) {
    return "Unable to generate a summary";
  }
};
*/

export const summarizeText = async (text: string, summaryLength: number) => {
  try {
    console.log("=== Début summarizeText ===");
    console.log("Texte reçu (longueur en mots):", text.split(/\s+/).length);
    console.log("Longueur résumé demandée:", summaryLength);
    console.log("API_KEY présente ?", !!process.env.HUGGINGFACE_API_KEY);
    console.log("URL API utilisée:", process.env.HUGGINGFACE);

    const res = await fetch(process.env.HUGGINGFACE as string, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
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

    console.log("Statut de la réponse HF:", res.status, res.statusText);

    const result = await res.json();
    console.log("Réponse HuggingFace brute:", result);

    if (!res.ok) {
      throw new Error(`Erreur API: ${res.status} ${res.statusText}`);
    }

    const summary = result[0]?.summary_text || "Summary not available";
    console.log("Résumé généré:", summary);
    console.log("=== Fin summarizeText ===");

    return summary;
  } catch (error) {
    console.error("Erreur dans summarizeText:", error);
    return "Unable to generate a summary";
  }
};
