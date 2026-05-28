import PublicShell from "@/components/public/PublicShell";
import { DEFAULT_LOCALE, getPublicProfile } from "@/lib/content";
import { profile as fallbackProfile } from "@/data/profile";

export default async function PortfolioLayout({ children }) {
  const profile = (await getPublicProfile(DEFAULT_LOCALE)) ?? fallbackProfile;

  return <PublicShell profile={profile}>{children}</PublicShell>;
}

