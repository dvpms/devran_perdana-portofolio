"use client";

import Link from "next/link";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const credentialIcons = {
  certification: FiAward,
  training: FiBookOpen,
};

export default function CredentialTable({ credentials, title, type }) {
  const { t } = useLanguage();
  const Icon = credentialIcons[type] ?? FiAward;

  return (
    <section className="space-y-3">
      <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{title}</h3>
      <div className="overflow-x-auto rounded-md border border-border bg-background">
        <table className="w-full min-w-[500px] border-collapse text-left text-sm">
          <thead className="bg-muted">
            <tr className="border-b border-border text-muted-foreground">
              <th className="w-1/2 px-4 py-3 font-medium">{t.credentialTable.programName}</th>
              <th className="px-4 py-3 font-medium">{t.credentialTable.organizer}</th>
              <th className="w-24 px-4 py-3 font-medium">{t.credentialTable.year}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {credentials.map((credential) => (
              <tr className="group transition-colors hover:bg-surface" key={credential.id}>
                <td className="px-4 py-4 font-medium">
                  <Link className="flex items-center gap-3" href={`/certificates/${credential.id}`}>
                    <Icon
                      className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground"
                      aria-hidden="true"
                    />
                    <span className="transition-colors group-hover:text-ink">{credential.title}</span>
                  </Link>
                </td>
                <td className="px-4 py-4 text-foreground">{credential.issuer}</td>
                <td className="px-4 py-4 text-muted-foreground">{credential.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
