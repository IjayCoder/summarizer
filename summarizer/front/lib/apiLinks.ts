const API_URL = "http://localhost:5000";

export const SummarizeText = async (text: string, summaryLength: number) => {
  const res = await fetch(`${API_URL}/api/summarize`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ text, summaryLength }),
  });

  if (!res.ok) {
    throw new Error("Error occurs when summarizing the text");
  }

  const summary = await res.json();
  return summary;
};
