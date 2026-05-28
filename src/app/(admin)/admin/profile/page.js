import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { AdminHeader, LocaleSwitch } from "../_shared";

async function getLocale(searchParams) {
  return await searchParams?.locale === "en" ? "en" : "id";
}

async function updateProfileAction(formData) {
  "use server";

  const locale = formData.get("locale") === "en" ? "en" : "id";

  const socialsRaw = formData.get("socials")?.toString() ?? "[]";
  let socials = [];

  try {
    socials = JSON.parse(socialsRaw);
    if (!Array.isArray(socials)) socials = [];
  } catch {
    socials = [];
  }

  await prisma.profile.upsert({
    where: { locale },
    update: {
      name: formData.get("name")?.toString() ?? "",
      role: formData.get("role")?.toString() ?? "",
      title: formData.get("title")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      location: formData.get("location")?.toString() ?? "",
      portrait: formData.get("portrait")?.toString() ?? "",
      heading: formData.get("heading")?.toString() ?? "",
      subheading: formData.get("subheading")?.toString() ?? "",
      tagline: formData.get("tagline")?.toString() ?? "",
      focus: (formData.get("focus")?.toString() ?? "").trim() || null,
      socials: {
        deleteMany: {},
        create: socials
          .filter((item) => item && typeof item.label === "string" && typeof item.href === "string")
          .map((item, index) => ({
            label: item.label,
            href: item.href,
            order: index,
          })),
      },
    },
    create: {
      locale,
      name: formData.get("name")?.toString() ?? "",
      role: formData.get("role")?.toString() ?? "",
      title: formData.get("title")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      location: formData.get("location")?.toString() ?? "",
      portrait: formData.get("portrait")?.toString() ?? "",
      heading: formData.get("heading")?.toString() ?? "",
      subheading: formData.get("subheading")?.toString() ?? "",
      tagline: formData.get("tagline")?.toString() ?? "",
      focus: (formData.get("focus")?.toString() ?? "").trim() || null,
      socials: {
        create: socials
          .filter((item) => item && typeof item.label === "string" && typeof item.href === "string")
          .map((item, index) => ({
            label: item.label,
            href: item.href,
            order: index,
          })),
      },
    },
  });

  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/projects");
  revalidatePath("/resume");
}

export default async function AdminProfilePage({ searchParams }) {
  const locale = await getLocale(searchParams);

  const profile = await prisma.profile.findUnique({
    where: { locale },
    include: { socials: { orderBy: { order: "asc" } } },
  });

  const socials = profile?.socials ?? [];
  const socialsJson = JSON.stringify(
    socials.map((s) => ({ label: s.label, href: s.href })),
    null,
    2
  );

  return (
    <div className="space-y-8">
      <AdminHeader title="Profile" locale={locale} />
      <LocaleSwitch basePath="/admin/profile" locale={locale} />

      <form action={updateProfileAction} className="space-y-6">
        <input name="locale" type="hidden" value={locale} />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" defaultValue={profile?.name ?? ""} />
          <Field label="Role" name="role" defaultValue={profile?.role ?? ""} />
          <Field label="Title" name="title" defaultValue={profile?.title ?? ""} />
          <Field label="Email" name="email" defaultValue={profile?.email ?? ""} />
          <Field label="Phone" name="phone" defaultValue={profile?.phone ?? ""} />
          <Field label="Location" name="location" defaultValue={profile?.location ?? ""} />
          <Field label="Portrait URL" name="portrait" defaultValue={profile?.portrait ?? ""} />
        </div>

        <div className="grid gap-4">
          <Field label="Home Heading" name="heading" defaultValue={profile?.heading ?? ""} />
          <Field label="Home Subheading" name="subheading" defaultValue={profile?.subheading ?? ""} />
          <Field label="Tagline" name="tagline" defaultValue={profile?.tagline ?? ""} />
          <Field label="Focus (optional)" name="focus" defaultValue={profile?.focus ?? ""} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="socials">
            Socials (JSON)
          </label>
          <textarea
            className="min-h-40 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted"
            defaultValue={socialsJson}
            id="socials"
            name="socials"
          />
          <p className="text-xs text-muted-foreground">
            Format: <span className="font-mono">[{`{"label":"GitHub","href":"https://..."}`}]</span>
          </p>
        </div>

        <button
          className="rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-ink"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, defaultValue }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted"
        defaultValue={defaultValue}
        id={name}
        name={name}
      />
    </div>
  );
}
