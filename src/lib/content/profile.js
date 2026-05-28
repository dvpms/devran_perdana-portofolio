import prisma from "@/lib/prisma";
import { normalizeLocale } from "./locale";

export async function getPublicProfile(localeInput) {
  const locale = normalizeLocale(localeInput);

  const profile = await prisma.profile.findUnique({
    where: { locale },
    include: { socials: { orderBy: { order: "asc" } } },
  });

  if (!profile) return null;

  return {
    name: profile.name,
    role: profile.role,
    title: profile.title,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    portrait: profile.portrait,
    heading: profile.heading,
    subheading: profile.subheading,
    tagline: profile.tagline,
    focus: profile.focus,
    socials: profile.socials.map((social) => ({
      label: social.label,
      href: social.href,
    })),
  };
}
