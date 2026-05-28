import prisma from "@/lib/prisma";
import { normalizeLocale } from "./locale";

export async function getResumeContent(localeInput) {
  const locale = normalizeLocale(localeInput);

  const resume = await prisma.resumeContent.findUnique({
    where: { locale },
  });

  if (!resume) return null;

  return {
    title: resume.title,
    description: resume.description,
    pdfUrl: resume.pdfUrl,
  };
}
