import prisma from "@/lib/prisma";
import { normalizeLocale } from "./locale";

export async function getAboutContent(localeInput) {
  const locale = normalizeLocale(localeInput);

  const about = await prisma.aboutContent.findUnique({
    where: { locale },
    include: { techStack: { orderBy: { order: "asc" } } },
  });

  if (!about) return null;

  return {
    title: about.title,
    paragraphs: about.paragraphs,
    techStack: about.techStack.map((category) => ({
      title: category.title,
      icon: category.icon,
      items: category.items,
    })),
  };
}
