import prisma from "@/lib/prisma";
import { normalizeLocale } from "./locale";

function mapTranslation(credential, translation) {
  return {
    id: credential.slug,
    slug: credential.slug,
    title: translation.title,
    type: credential.type,
    issuer: credential.issuer,
    year: credential.year,
    image: credential.imageUrl,
    description: translation.description,
    skills: translation.skills,
  };
}

export async function listCredentialsByType(type, localeInput) {
  const locale = normalizeLocale(localeInput);

  const credentials = await prisma.credential.findMany({
    where: { published: true, type },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: { translations: { where: { locale } } },
  });

  return credentials
    .map((credential) => {
      const translation = credential.translations[0];
      if (!translation) return null;
      return mapTranslation(credential, translation);
    })
    .filter(Boolean);
}

export async function getCredentialBySlug(slug, localeInput) {
  const locale = normalizeLocale(localeInput);

  const credential = await prisma.credential.findUnique({
    where: { slug },
    include: { translations: { where: { locale } } },
  });

  if (!credential) return null;

  const translation = credential.translations[0];
  if (!translation) return null;

  return mapTranslation(credential, translation);
}
