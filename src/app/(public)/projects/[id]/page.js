import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import Badge from "@/components/public/Badge";
import { getProjectById, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project Not Found - Devran Perdana Malik | Full Stack Developer" };
  }

  return {
    title: `${project.title} - Devran Perdana Malik | Full Stack Developer`,
    description: project.context,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8 pb-10">
      <Link
        className="animate-fade-in mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-all hover:-translate-x-1 hover:text-foreground"
        href="/projects"
      >
        <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
        Kembali ke Proyek
      </Link>

      <div className="animate-fade-in-up space-y-4">
        <Badge>{project.category}</Badge>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">{project.title}</h1>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((technology) => (
            <span
              className="rounded-sm border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div
        className="animate-fade-in-up overflow-hidden rounded-md border border-border opacity-0"
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <Image
          alt={project.title}
          className="h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.02]"
          height={600}
          priority
          src={project.image}
          width={1200}
        />
      </div>

      <section
        className="animate-fade-in-up mt-8 flex flex-col items-center justify-between gap-4 rounded-md border border-border bg-surface p-6 opacity-0 sm:flex-row"
        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
      >
        <div>
          <h2 className="font-semibold text-foreground">Ingin melihat kode atau implementasi langsung?</h2>
          <p className="text-sm text-muted-foreground">Proyek ini memiliki repositori publik dan demo live.</p>
        </div>
        <a
          className="group flex items-center gap-2 whitespace-nowrap rounded-sm border border-border bg-background px-5 py-2.5 text-sm font-medium transition-all hover:border-muted-foreground hover:shadow-sm"
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" />
          Buka Proyek
        </a>
      </section>

      <div className="mt-12 space-y-10 text-foreground">
        <ProjectNarrativeSection delay="400ms" number="01" title="Konteks & Masalah">
          {project.context}
        </ProjectNarrativeSection>
        <ProjectNarrativeSection delay="500ms" number="02" title="Solusi Teknis">
          {project.solution}
        </ProjectNarrativeSection>
        <section
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <h2 className="mb-5 flex items-center gap-2 border-b border-border pb-3 text-2xl font-semibold">
            <span className="text-lg font-normal text-muted-foreground">03 /</span>
            Dampak Bisnis
          </h2>
          <div className="rounded-r-sm border-l-4 border-foreground bg-surface p-5 font-medium leading-relaxed shadow-sm">
            {project.impact}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectNarrativeSection({ children, delay, number, title }) {
  return (
    <section className="animate-fade-in-up opacity-0" style={{ animationDelay: delay, animationFillMode: "forwards" }}>
      <h2 className="mb-5 flex items-center gap-2 border-b border-border pb-3 text-2xl font-semibold">
        <span className="text-lg font-normal text-muted-foreground">{number} /</span>
        {title}
      </h2>
      <p className="leading-relaxed">{children}</p>
    </section>
  );
}

