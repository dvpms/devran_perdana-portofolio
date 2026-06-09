"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * Compact language toggle pill: ID | EN
 *
 * Renders a subtle two-segment control matching the existing
 * design system (border-border, muted-foreground, hover effects).
 */
export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-border bg-muted p-0.5 text-xs font-medium w-fit">
      <button
        className={`rounded-sm px-2 py-1 transition-all ${
          locale === "id"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => setLocale("id")}
        type="button"
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        className={`rounded-sm px-2 py-1 transition-all ${
          locale === "en"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => setLocale("en")}
        type="button"
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
