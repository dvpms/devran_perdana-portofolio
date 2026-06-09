"use client";

import Link from "next/link";
import Badge from "@/components/public/Badge";
import ImageSlide from "@/components/public/ImageSlide";
import { getCertificationById } from "@/data/certifications";
import { useLanguage } from "@/context/LanguageContext";

export default function CertDetailContent({ certificationId }) {
  const { locale, t } = useLanguage();
  const certification = getCertificationById(certificationId, locale);

  if (!certification) {
    return null;
  }

  return (
    <div className="space-y-8 pb-10">
      <Link
        className="animate-fade-in mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-all hover:-translate-x-1 hover:text-foreground"
        href="/about"
      >
        <span className="h-4 w-4" aria-hidden="true">←</span>
        {t.certificates.backToProfile}
      </Link>

      <div className="animate-fade-in-up space-y-4">
        <Badge>{certification.type === "certification" ? t.about.certLabel : t.about.trainingLabel}</Badge>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">{certification.title}</h1>
        <p className="text-lg text-muted-foreground">
          {certification.issuer} • {certification.year}
        </p>
      </div>

      <ImageSlide images={certification.image} title={certification.title} />

      <div className="mt-8 space-y-8 text-foreground">
        <section
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold">{t.certificates.description}</h2>
          <p className="leading-relaxed">{certification.description}</p>
        </section>

        <section
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold">{t.certificates.skills}</h2>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill) => (
              <span
                className="rounded-sm border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
