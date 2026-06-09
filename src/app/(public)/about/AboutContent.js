"use client";

import {
  FiAward,
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiUser,
} from "react-icons/fi";
import CredentialTable from "@/components/public/CredentialTable";
import SectionHeading from "@/components/public/SectionHeading";
import { getCertificationsByType } from "@/data/certifications";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  {
    title: "Backend & Architecture",
    icon: FiServer,
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend Experience",
    icon: FiCode,
    items: ["React", "Next.js", "JavaScript", "Tailwind"],
  },
  {
    title: "Cloud & Deployment",
    icon: FiCloud,
    items: ["AWS", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    title: "System & Workflow",
    icon: FiDatabase,
    items: ["Automation", "Dashboard System", "API Integration", "CI/CD"],
  },
];

export default function AboutContent() {
  const { locale, t } = useLanguage();
  const certificationRows = getCertificationsByType("certification", locale);
  const trainingRows = getCertificationsByType("training", locale);

  return (
    <div className="space-y-16 pb-10">
      <section className="animate-fade-in-up space-y-6">
        <h1 className="mb-3 flex items-center gap-2 text-3xl font-bold text-foreground">
          <FiUser className="h-6 w-6" />
          {t.about.title}
        </h1>
        <div className="space-y-4 text-lg leading-relaxed text-foreground">
          {t.about.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <div
        className="animate-fade-in-up w-full border-t border-border"
        style={{ animationDelay: "100ms" }}
      />

      <section
        className="animate-fade-in-up space-y-6 opacity-0"
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <SectionHeading icon={FiLayers} title={t.about.techStackTitle} />
        <div className="grid gap-6 sm:grid-cols-2">
          {techStack.map((category) => {
            const Icon = category.icon;

            return (
              <div
                className="rounded-md border border-border bg-background p-5 transition-colors duration-300 hover:border-muted-foreground"
                key={category.title}
              >
                <h3 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      className="rounded-sm border border-border bg-muted px-2.5 py-1 text-sm text-foreground transition-colors hover:bg-background"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div
        className="animate-fade-in-up w-full border-t border-border"
        style={{ animationDelay: "300ms" }}
      />

      <section
        className="animate-fade-in-up space-y-6 opacity-0"
        style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
      >
        <SectionHeading icon={FiAward} title={t.about.certTitle} />
        <div className="space-y-8">
          <CredentialTable
            credentials={certificationRows}
            title={t.about.certLabel}
            type="certification"
          />
          <CredentialTable
            credentials={trainingRows}
            title={t.about.trainingLabel}
            type="training"
          />
        </div>
      </section>
    </div>
  );
}
