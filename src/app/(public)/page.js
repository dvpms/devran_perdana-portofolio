import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiBriefcase, FiTarget } from "react-icons/fi";
import ProjectCard from "@/components/public/ProjectCard";
import SectionHeading from "@/components/public/SectionHeading";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-10">
      <section className="pt-4 md:pt-0">
        <div className="flex flex-col-reverse items-center gap-8 sm:flex-row">
          <div className="animate-fade-in-up flex-1 space-y-6 text-center sm:text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl">
              Halo, saya {profile.name}.
            </h1>
            <div className="space-y-2 text-lg text-foreground">
              <p>{profile.intro}</p>
              <p className="text-base text-muted-foreground">
                {profile.tagline}
              </p>
            </div>
            <div className="flex justify-center pt-4 sm:justify-start">
              <Link
                className="group flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-medium transition-all hover:bg-muted hover:shadow-sm"
                href="/projects"
              >
                Lihat Proyek
                <FiArrowDown
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div
            className="animate-fade-in relative h-48 w-48 shrink-0 opacity-0 sm:h-56 sm:w-56"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="absolute inset-4 -z-10 rounded-full bg-muted" />
            <Image
              alt={`Foto profil ${profile.name}`}
              className="animate-float h-full w-full rounded-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              height={360}
              priority
              src={profile.portrait}
              width={360}
            />
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
                    Current Focus
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
          <SectionHeading icon={FiBriefcase} title="Highlight Proyek" />
          <Link
            className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            href="/projects"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
