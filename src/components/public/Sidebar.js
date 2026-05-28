"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBookOpen,
  FiBriefcase,
  FiFileText,
  FiHome,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiX,
} from "react-icons/fi";
import SocialIcon from "./SocialIcon";

const navItems = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/about", label: "About", icon: FiUser },
  { href: "/projects", label: "Projects", icon: FiBriefcase },
  { href: "/resume", label: "Resume", icon: FiFileText },
];

function getIsActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar({ isOpen, onClose, profile }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen ? (
        <button
          aria-label="Tutup navigasi"
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={onClose}
          type="button"
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-background shadow-sidebar transition-transform duration-300 ease-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-6 md:hidden">
          <div className="flex flex-col items-start">
            <Link
              className="flex text-sm font-bold text-foreground"
              href="/"
              onClick={onClose}
            >
              {profile?.name}
            </Link>
            <span className="text-xs text-muted-foreground">Full Stack Developer</span>
          </div>
          <button
            className="rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={onClose}
            type="button"
            aria-label="Tutup menu"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-8">
          <div className="py-6 px-3 h-14 md:h-auto md:flex items-center justify-between border-b md:border-b-0 border-border hidden">
            <Link
              href="/"
              className="font-medium flex flex-col items-start gap-2 text-notion-text hover:opacity-70 transition-opacity"
            >
              <span className="font-bold">{profile?.name}</span>
              <span className="text-xs text-muted-foreground">Full Stack Developer</span>
            </Link>
            <button
              className="md:hidden text-notion-gray p-1 hover:bg-notion-hover rounded transition-colors"
              onClick={onClose}
            >
            </button>
          </div>

          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = getIsActive(pathname, item.href);

            return (
              <Link
                className={`animate-slide-right flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium opacity-0 transition-all duration-200 hover:translate-x-1 hover:bg-muted ${
                  isActive
                    ? "translate-x-1 bg-muted text-foreground"
                    : "text-foreground"
                }`}
                href={item.href}
                key={item.href}
                onClick={onClose}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                  aria-hidden="true"
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div
          className="animate-fade-in space-y-4 border-t border-border p-4 text-xs text-muted-foreground opacity-0"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <FiMapPin
                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />
              <span>{profile?.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <a
                href={profile?.phone ? `https://wa.me/${profile.phone}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile?.phone}
              </a>
            </div>
            <a
              className="flex items-center gap-2 transition-colors hover:text-foreground"
              href={profile?.email ? `mailto:${profile.email}` : "#"}
            >
              <FiMail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{profile?.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 border-t border-border pt-3">
            {(profile?.socials ?? []).map((social) => (
              <a
                className="transition-all hover:-translate-y-1 hover:text-foreground"
                href={social.href}
                key={social.label}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={social.label}
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
