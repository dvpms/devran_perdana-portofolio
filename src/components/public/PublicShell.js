"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { useLanguage } from "@/context/LanguageContext";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";

function ShellContent({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent/30 md:flex-row">
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="relative flex w-full flex-1 flex-col md:ml-64">
        <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 md:py-20">{children}</div>
        <footer className="mt-auto space-x-1 flex justify-center flex-col sm:flex-row border-t w-full border-border bg-surface/80 py-8 text-center text-sm text-muted-foreground text-wrap md:text-nowrap">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.tagline}</p>
        </footer>
      </main>
    </div>
  );
}

export default function PublicShell({ children }) {
  return (
    <LanguageProvider>
      <ShellContent>{children}</ShellContent>
    </LanguageProvider>
  );
}
