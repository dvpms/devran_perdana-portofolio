import Link from "next/link";

export const metadata = {
  title: "Admin - Portfolio CMS",
};

export default function AdminHomePage() {
  const links = [
    { href: "/admin/profile", label: "Profile (Home & Sidebar)" },
    { href: "/admin/about", label: "About" },
    { href: "/admin/projects", label: "Projects" },
    { href: "/admin/resume", label: "Resume" },
    { href: "/admin/credentials", label: "Credentials" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin CMS</h1>
      <p className="text-sm text-muted-foreground">
        Kelola konten portfolio yang ditampilkan di halaman public.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <Link
            className="rounded-md border border-border bg-background p-4 text-sm font-medium transition-colors hover:bg-surface"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
