import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { AdminHeader, LocaleSwitch } from "../_shared";

function getLocale(searchParams) {
  return searchParams?.locale === "en" ? "en" : "id";
}

async function updateAboutAction(formData) {
  "use server";

  const locale = formData.get("locale") === "en" ? "en" : "id";

  const paragraphsRaw = formData.get("paragraphs")?.toString() ?? "[]";
  const techStackRaw = formData.get("techStack")?.toString() ?? "[]";

  let paragraphs = [];
  let techStack = [];

  try {
    paragraphs = JSON.parse(paragraphsRaw);
    if (!Array.isArray(paragraphs)) paragraphs = [];
  } catch {
    paragraphs = [];
  }

  try {
    techStack = JSON.parse(techStackRaw);
    if (!Array.isArray(techStack)) techStack = [];
  } catch {
    techStack = [];
  }

  const title = formData.get("title")?.toString() ?? "";

  await prisma.aboutContent.upsert({
    where: { locale },
    update: {
      title,
      paragraphs: paragraphs.filter((p) => typeof p === "string"),
      techStack: {
        deleteMany: {},
        create: techStack
          .filter((c) => c && typeof c.title === "string" && typeof c.icon === "string")
          .map((c, index) => ({
            title: c.title,
            icon: c.icon,
            items: Array.isArray(c.items) ? c.items.filter((x) => typeof x === "string") : [],
            order: index,
          })),
      },
    },
    create: {
      locale,
      title,
      paragraphs: paragraphs.filter((p) => typeof p === "string"),
      techStack: {
        create: techStack
          .filter((c) => c && typeof c.title === "string" && typeof c.icon === "string")
          .map((c, index) => ({
            title: c.title,
            icon: c.icon,
            items: Array.isArray(c.items) ? c.items.filter((x) => typeof x === "string") : [],
            order: index,
          })),
      },
    },
  });

  revalidatePath("/about");
}

export default async function AdminAboutPage({ searchParams }) {
  const locale = getLocale(searchParams);

  const about = await prisma.aboutContent.findUnique({
    where: { locale },
    include: { techStack: { orderBy: { order: "asc" } } },
  });

  const paragraphsJson = JSON.stringify(about?.paragraphs ?? [], null, 2);
  const techStackJson = JSON.stringify(
    (about?.techStack ?? []).map((c) => ({
      title: c.title,
      icon: c.icon,
      items: c.items,
    })),
    null,
    2
  );

  return (
    <div className="space-y-8">
      <AdminHeader title="About" locale={locale} />
      <LocaleSwitch basePath="/admin/about" locale={locale} />

      <form action={updateAboutAction} className="space-y-6">
        <input name="locale" type="hidden" value={locale} />

        <Field label="Title" name="title" defaultValue={about?.title ?? ""} />

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="paragraphs">
            Paragraphs (JSON array)
          </label>
          <textarea
            className="min-h-40 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted"
            defaultValue={paragraphsJson}
            id="paragraphs"
            name="paragraphs"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="techStack">
            Tech Stack (JSON)
          </label>
          <textarea
            className="min-h-48 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted"
            defaultValue={techStackJson}
            id="techStack"
            name="techStack"
          />
          <p className="text-xs text-muted-foreground">
            icon: <span className="font-mono">server | code | cloud | database | layers</span>
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
