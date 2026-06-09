"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiDownload,
  FiTarget,
} from "react-icons/fi";
import ProjectCard from "@/components/public/ProjectCard";
import SectionHeading from "@/components/public/SectionHeading";
import { getLocalizedProfile } from "@/data/profile";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { locale, t } = useLanguage();
  const profile = getLocalizedProfile(locale);
  const featuredProjects = getFeaturedProjects(locale);

  return (
    <div className="space-y-20 pb-10">
      <section className="pt-4 md:pt-0">
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center">
            <div className="animate-fade-in-up w-full basis-1/2 space-y-6 text-center sm:text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl">
              {profile.heading}
            </h1>
            <div className="space-y-2 text-lg text-foreground">
              <h2>{profile.subheading}</h2>
              <p className="text-base text-muted-foreground">
                &ldquo;{profile.tagline}&rdquo;
              </p>
            </div>
            <div className="flex justify-center gap-2 pt-4 sm:justify-start text-white">
              <Link
                className="group flex items-center bg-black gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-all hover:bg-black/80 hover:shadow-sm scale-100 hover:scale-95"
                href="/projects"
              >
                {t.home.viewProjects}
                <FiArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                className="group flex w-max items-center border border-gray-300 bg-background justify-center gap-2 rounded-sm text-black px-5 py-2.5 text-sm font-medium transition-all hover:bg-foreground hover:text-white hover:scale-95 hover:shadow-md"
                download
                href="/resume.pdf"
              >
                {t.home.downloadCV}
                <FiDownload
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

            <div className="flex w-full basis-1/2 justify-center md:justify-end">
            <div
              className="animate-fade-in relative h-72 w-72 shrink-0 opacity-0 sm:h-80 sm:w-80 md:h-105 md:w-105"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <div
                className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-muted sm:h-72 sm:w-72 md:h-95 md:w-95"
                aria-hidden="true"
              />
              <Image
                alt={`${t.a11y.profilePhoto} ${profile.name}`}
                className="absolute bottom-0 left-1/2 z-10 h-full w-full -translate-x-1/2 scale-125 object-contain md:scale-[1.15]"
                height={560}
                priority
                src={profile.portrait}
                width={360}
              />
            </div>
          </div>
        </div>
      </section>

      {profile.focus && (
        <section
          className="animate-fade-in-up rounded-md border border-border bg-surface p-5 opacity-0 shadow-sm transition-shadow hover:shadow-card sm:p-6"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          {
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <div className="shrink-0 rounded-sm border border-border bg-background p-2.5">
                <FiTarget
                  className="h-5 w-5 text-foreground"
                  aria-hidden="true"
                />
              </div>
              {
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.home.currentFocus}
                  </h2>
                  <p className="leading-relaxed text-foreground">
                    {profile.focus}
                  </p>
                </div>
              }
            </div>
          }
        </section>
      )}

      <div
        className="animate-fade-in-up w-full border-t border-border"
        style={{ animationDelay: "400ms" }}
      />

      <section
        className="animate-fade-in-up space-y-8 opacity-0"
        style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
      >
        <div className="flex items-center justify-between">
          <SectionHeading icon={FiBriefcase} title={t.home.projectHighlights} />
          <Link
            className="text-md text-black transition-colors hover:text-foreground"
            href="/projects"
          >
            {t.home.viewAll}
            <FiArrowRight
              className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1 hidden md:inline-block"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
