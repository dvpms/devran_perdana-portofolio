import prisma from "@/lib/prisma";
import { normalizeLocale } from "./locale";

function mapTranslation(project, translation) {
  return {
    id: project.slug,
    slug: project.slug,
    title: translation.title,
    category: translation.category,
    image: project.imageUrl,
    link: project.demoUrl ?? "#",
    role: project.role,
    intro: translation.intro,
    context: translation.context,
    solution: translation.solution,
    impact: translation.impact,
    contributions: translation.contributions,
    highlights: translation.highlights,
    challenges: translation.challenges,
    impacts: translation.impacts ?? [],
    tech: project.tech,
  };
}

export async function listProjects(localeInput) {
  const locale = normalizeLocale(localeInput);

  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: {
      translations: { where: { locale } },
    },
  });

  return projects
    .map((project) => {
      const translation = project.translations[0];
      if (!translation) return null;
      return mapTranslation(project, translation);
    })
    .filter(Boolean);
}

export async function getProjectBySlug(slug, localeInput) {
  const locale = normalizeLocale(localeInput);

  const project = await prisma.project.findUnique({
    where: { slug },
    include: {
      translations: { where: { locale } },
    },
  });

  if (!project) return null;

  const translation = project.translations[0];
  if (!translation) return null;

  return mapTranslation(project, translation);
}
