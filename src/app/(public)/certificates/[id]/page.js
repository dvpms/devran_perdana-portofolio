import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import Badge from "@/components/public/Badge";
import { certifications, getCertificationById } from "@/data/certifications";

export function generateStaticParams() {
  return certifications.map((certification) => ({ id: certification.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const certification = getCertificationById(id);

  if (!certification) {
    return { title: "Credential Not Found - Devran Perdana Malik | Full Stack Developer" };
  }

  return {
    title: `${certification.title} - Devran Perdana Malik | Full Stack Developer`,
    description: certification.description,
  };
}

export default async function CertificationDetailPage({ params }) {
  const { id } = await params;
  const certification = getCertificationById(id);

  if (!certification) {
    notFound();
  }

  return (
    <div className="space-y-8 pb-10">
      <Link
        className="animate-fade-in mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-all hover:-translate-x-1 hover:text-foreground"
        href="/about"
      >
        <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
        Kembali ke Profil
      </Link>

      <div className="animate-fade-in-up space-y-4">
        <Badge>{certification.type}</Badge>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">{certification.title}</h1>
        <p className="text-lg text-muted-foreground">
          {certification.issuer} • {certification.year}
        </p>
      </div>

      <div
        className="animate-fade-in-up overflow-hidden rounded-md border border-border opacity-0"
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <Image
          alt={certification.title}
          className="h-auto max-h-[450px] w-full object-cover"
          height={600}
          priority
          src={certification.image}
          width={800}
        />
      </div>

      <div className="mt-8 space-y-8 text-foreground">
        <section
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold">Deskripsi</h2>
          <p className="leading-relaxed">{certification.description}</p>
        </section>

        <section
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 border-b border-border pb-2 text-xl font-semibold">Keahlian (Skills)</h2>
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

