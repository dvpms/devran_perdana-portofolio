export const DEFAULT_LOCALE = "id";

export function normalizeLocale(input) {
  if (input === "en") return "en";
  return "id";
}
