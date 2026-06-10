import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Projects",
  description: "Kumpulan portofolio dan proyek unggulan yang pernah dikerjakan oleh Devran Perdana Malik.",
  openGraph: {
    title: "Projects | Devran Perdana Malik",
    description: "Kumpulan portofolio dan proyek unggulan yang pernah dikerjakan oleh Devran Perdana Malik.",
    url: "https://devranperdana.my.id/projects",
  }
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
