import Link from "next/link";
import prisma from "@/lib/prisma";
import { AdminHeader } from "../_shared";

export const metadata = {
  title: "Admin - Projects",
};

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    select: {
      slug: true,
      published: true,
      sortOrder: true,
      translations: {
        where: { locale: "id" },
        select: { title: true },
      },
    },
  });

  return (
    <div className="space-y-8">
      <AdminHeader title="Projects" />

      <div className="overflow-x-auto rounded-md border border-border bg-background">
        <table className="w-full min-w-[500px] border-collapse text-left text-sm">
          <thead className="bg-muted">
            <tr className="border-b border-border text-muted-foreground">
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Title (ID)</th>
              <th className="px-4 py-3 font-medium">Published</th>
              <th className="px-4 py-3 font-medium">Order</th>
              <th className="w-32 px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {projects.map((project) => (
              <tr className="transition-colors hover:bg-surface" key={project.slug}>
                <td className="px-4 py-3 font-mono text-xs">{project.slug}</td>
                <td className="px-4 py-3">{project.translations[0]?.title ?? "-"}</td>
                <td className="px-4 py-3">{project.published ? "Yes" : "No"}</td>
                <td className="px-4 py-3">{project.sortOrder}</td>
                <td className="px-4 py-3">
                  <Link
                    className="rounded-sm border border-border px-3 py-1.5 text-xs hover:bg-background"
                    href={`/admin/projects/${project.slug}`}
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
        Untuk menambah project baru, lakukan via seed dulu (iterasi berikutnya akan ditambah form create).
      </p>
    </div>
  );
}
