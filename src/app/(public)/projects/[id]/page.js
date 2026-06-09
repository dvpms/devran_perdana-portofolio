import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";
import ProjectDetailContent from "./ProjectDetailContent";

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

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent projectId={id} />;
}
