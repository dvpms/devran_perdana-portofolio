"use client";

import Link from "next/link";
import { FiBookOpen, FiMenu } from "react-icons/fi";

export default function MobileHeader({ onMenuClick, profile }) {
  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-border bg-background/90 px-6 backdrop-blur-md md:hidden">
      <Link className="flex items-center gap-2 font-medium text-foreground" href="/">
        <FiBookOpen className="h-4 w-4" aria-hidden="true" />
        {profile?.name}
      </Link>
      <button
        className="-mr-2 rounded-sm p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        onClick={onMenuClick}
        type="button"
        aria-label="Buka menu"
      >
        <FiMenu className="h-5 w-5" aria-hidden="true" />
      </button>
    </header>
  );
}

