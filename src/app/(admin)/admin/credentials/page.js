import Link from "next/link";
import prisma from "@/lib/prisma";
import { AdminHeader } from "../_shared";

export const metadata = {
  title: "Admin - Credentials",
};

export default async function AdminCredentialsPage() {
  const credentials = await prisma.credential.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    select: {
      slug: true,
      type: true,
      issuer: true,
      year: true,
      published: true,
      translations: { where: { locale: "id" }, select: { title: true } },
    },
  });

  return (
    <div className="space-y-8">
      <AdminHeader title="Credentials" />

      <div className="overflow-x-auto rounded-md border border-border bg-background">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead className="bg-muted">
            <tr className="border-b border-border text-muted-foreground">
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Title (ID)</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Issuer</th>
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Published</th>
              <th className="w-32 px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {credentials.map((credential) => (
              <tr className="transition-colors hover:bg-surface" key={credential.slug}>
                <td className="px-4 py-3 font-mono text-xs">{credential.slug}</td>
                <td className="px-4 py-3">{credential.translations[0]?.title ?? "-"}</td>
                <td className="px-4 py-3">{credential.type}</td>
                <td className="px-4 py-3">{credential.issuer}</td>
                <td className="px-4 py-3">{credential.year}</td>
                <td className="px-4 py-3">{credential.published ? "Yes" : "No"}</td>
                <td className="px-4 py-3">
                  <Link
                    className="rounded-sm border border-border px-3 py-1.5 text-xs hover:bg-background"
                    href={`/admin/credentials/${credential.slug}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        Untuk menambah credential baru, lakukan via seed dulu (iterasi berikutnya akan ditambah form create).
      </p>
    </div>
  );
}
