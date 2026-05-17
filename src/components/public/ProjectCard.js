import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
  return (
    <Link
      className="group overflow-hidden rounded-md border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
      href={`/projects/${project.id}`}
    >
      <div className="overflow-hidden border-b border-border">
        <Image
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          height={360}
          src={project.image}
          width={720}
        />
      </div>
      <div className="p-5">
        <Badge className="mb-3 transition-colors group-hover:bg-background">{project.category}</Badge>
        <h3 className="line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-ink">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

