import { en } from "./dictionaries/en";
import { id } from "./dictionaries/id";

const dictionaries = { id, en };

/**
 * Returns the UI dictionary for the given locale.
 * Falls back to Indonesian if the locale is unknown.
 */
export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries.id;
}
