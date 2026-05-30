import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiLayers } from "react-icons/fi";
import Badge from "@/components/public/Badge";
import ProjectImageSlider from "@/components/public/ProjectImageSlider";
import { getProjectById, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found - Devran Perdana Malik | Full Stack Developer",
    };
  }

  return {
    title: `${project.title} - Devran Perdana Malik | Full Stack Developer`,
    description: project.context,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  const highlights = project?.highlights ?? [];
  const images = project?.image ?? [];
  const challenges = project?.challenges ?? [];
  const impacts = project?.impacts ?? [];
  const contributions = project?.contributions ?? [];

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
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.intro}
        </p>
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

      <ProjectImageSlider images={images} title={project.title} />

      <section
        className="animate-fade-in-up mt-8 flex flex-col items-center justify-between gap-4 rounded-md border border-border bg-surface p-6 opacity-0 sm:flex-row"
        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
      >
        <div>
          <h2 className="font-semibold text-foreground">
            Ingin melihat implementasi langsung?
          </h2>
          <p className="text-sm text-muted-foreground">
            Proyek ini memiliki demo live.
          </p>
        </div>
        <a
          className="group flex items-center gap-2 whitespace-nowrap rounded-sm border border-border bg-foreground text-white px-5 py-2.5 text-sm font-medium transition-all hover:border-muted-foreground hover:shadow-sm"
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Live Demo
          <FiExternalLink
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </section>

      {/* Project Overview */}
      <div className="mt-12 space-y-10 text-foreground">
        <div className="flex items-center gap-2 mb-4 text-lg">
          <FiLayers
            className="h-5 w-5 inline text-muted-foreground"
            aria-hidden="true"
          />
          <span className="inline uppercase tracking-wide text-muted-foreground">
            Project Overview
          </span>
        </div>

        <section
          className="animate-fade-in-up rounded-md border border-border bg-surface p-6 opacity-0 shadow-sm"
          style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Peran & Kontribusi
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {project.role ?? "Kontributor Utama"}
              </h2>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                Kontribusi saya pada proyek ini, dari perancangan hingga implementasi.
              </p>
            </div>
          </div>

          {contributions.length > 0 && (
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {contributions.map((item) => (
                <div
                  className="rounded-md border border-border bg-background p-5 shadow-sm"
                  key={item}
                >
                  <p className="leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <ProjectNarrativeSection
          delay="400ms"
          number="01"
          title="Konteks & Masalah"
        >
          {project.context}
        </ProjectNarrativeSection>
        <ProjectNarrativeSection delay="500ms" number="02" title="Solution Approach">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.solution}
            </p>

            {highlights.length > 0 && (
              <div className="grid gap-4 pt-2 md:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    className="rounded-md border border-border bg-background p-4 shadow-sm"
                    key={item}
                  >
                    <p className="font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ProjectNarrativeSection>

        <ProjectNarrativeSection delay="600ms" number="03" title="Challenges">
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div
                className="rounded-md border border-border bg-background p-5 shadow-sm"
                key={challenge}
              >
                <p className="leading-relaxed text-foreground">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </ProjectNarrativeSection>
      </div>

      <section
        className="animate-fade-in-up space-y-8 opacity-0"
        style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
      >
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
            Business Impact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Real operational improvements.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {impacts.map((impact) => (
            <div
              className="rounded-md border border-border bg-background p-7 shadow-sm"
              key={impact.value}
            >
              <h3 className="mb-4 text-4xl font-bold tracking-tight text-foreground ">
                {impact.value}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {impact.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectNarrativeSection({ children, delay, number, title }) {
  return (
    <section
      className="animate-fade-in-up opacity-0"
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      <div className="flex items-center gap-4">
        <span className="text-xl font-medium text-muted-foreground">
          {number}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      </div>

      <div className="max-w-4xl space-y-5 pl-10 pt-5">
        {typeof children === "string" ? (
          <p className="leading-relaxed text-muted-foreground">{children}</p>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
