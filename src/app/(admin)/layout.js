import { requireAdminSession } from "@/lib/auth/session";

export default async function AdminLayout({ children }) {
  await requireAdminSession();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 md:py-16">{children}</div>
    </div>
  );
}
