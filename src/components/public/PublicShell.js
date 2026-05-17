"use client";

import { useState } from "react";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";

export default function PublicShell({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent/30 md:flex-row">
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="relative flex w-full flex-1 flex-col md:ml-64">
        <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-10 md:py-20">{children}</div>
        <footer className="mt-auto border-t border-border bg-surface/80 py-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Devran Perdana Malik. Built with intent.</p>
        </footer>
      </main>
    </div>
  );
}

