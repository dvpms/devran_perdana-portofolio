import Image from "next/image";
import Link from "next/link";
import { FiBriefcase } from "react-icons/fi";
import Badge from "@/components/public/Badge";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects - Devran Perdana Malik | Full Stack Developer",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="animate-fade-in-up" >
        <h1 className="mb-3 flex items-center gap-2 text-3xl font-bold text-foreground">
          <FiBriefcase className="h-6 w-6" />
          Proyek & Solusi
        </h1>
        <p className="text-lg text-foreground">
          Kumpulan proyek beserta solusi yang saya bangun untuk membantu
          menyelesaikan masalah operasional dan kebutuhan bisnis.
        </p>
      </div>

      <div className="mt-8 space-y-12">
        {projects.map((project, index) => (
          <article
            className="animate-fade-in-up group flex flex-col gap-6 opacity-0 md:flex-row shadow-md p-4 rounded-md border border-border"
            key={project.id}
            style={{
              animationDelay: `${(index + 1) * 200}ms`,
              animationFillMode: "forwards",
            }}
          >
            <Link
              className="w-full overflow-hidden rounded-md border border-border bg-muted md:w-1/2"
              href={`/projects/${project.id}`}
            >
              <Image
                alt={project.title}
                className="min-h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                height={420}
                src={project.image}
                width={840}
              />
            </Link>
            <div className="flex w-full flex-col justify-center space-y-4 md:w-1/2">
              <div>
                <Badge className="mb-3 transition-colors group-hover:bg-background">
                  {project.category}
                </Badge>
                <Link href={`/projects/${project.id}`}>
                  <h2 className="text-2xl font-bold text-foreground transition-colors hover:text-ink">
                    {project.title}
                  </h2>
                </Link>
              </div>
              <p className="line-clamp-3 leading-relaxed text-foreground">
                {project.context}
              </p>
              <div className="flex gap-4 pt-2">
                <Link
                  className="w-max content-center rounded-xl border text-white border-border px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm font-medium transition-all bg-foreground  hover:translate-x-1 hover:bg-black"
                  href={`/projects/${project.id}`}
                >
                  Lihat Proyek
                </Link>
                <Link
                  className="w-max content-center rounded-xl border border-border px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm font-medium transition-all hover:translate-x-1 hover:bg-muted-foreground"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
