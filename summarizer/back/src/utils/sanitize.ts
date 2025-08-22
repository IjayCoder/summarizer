import sanitizeHtml from "sanitize-html";

export function sanitizeInput(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: [], // no tags allowed
    allowedAttributes: {}, // no HTML attributes allowed
  }).trim(); // also removes unnecessary spaces
}
