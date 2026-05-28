import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { AdminHeader, LocaleSwitch } from "../../_shared";

function getLocale(searchParams) {
  return searchParams?.locale === "en" ? "en" : "id";
}

async function updateProjectAction(formData) {
  "use server";

  const locale = formData.get("locale") === "en" ? "en" : "id";
  const slug = formData.get("slug")?.toString() ?? "";

  const techRaw = formData.get("tech")?.toString() ?? "[]";
  const contributionsRaw = formData.get("contributions")?.toString() ?? "[]";
  const highlightsRaw = formData.get("highlights")?.toString() ?? "[]";
  const challengesRaw = formData.get("challenges")?.toString() ?? "[]";
  const impactsRaw = formData.get("impacts")?.toString() ?? "[]";

  const parseArray = (raw) => {
    try {
      const value = JSON.parse(raw);
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  };

  const tech = parseArray(techRaw).filter((x) => typeof x === "string");
  const contributions = parseArray(contributionsRaw).filter((x) => typeof x === "string");
  const highlights = parseArray(highlightsRaw).filter((x) => typeof x === "string");
  const challenges = parseArray(challengesRaw).filter((x) => typeof x === "string");
  const impacts = parseArray(impactsRaw);

  const project = await prisma.project.findUnique({ where: { slug }, select: { id: true } });
  if (!project) throw new Error("Project not found");

  await prisma.project.update({
    where: { slug },
    data: {
      imageUrl: formData.get("imageUrl")?.toString() ?? "",
      demoUrl: (formData.get("demoUrl")?.toString() ?? "").trim() || null,
      role: (formData.get("role")?.toString() ?? "").trim() || null,
      published: formData.get("published") === "on",
      sortOrder: Number(formData.get("sortOrder") ?? 0),
      tech,
    },
  });

  await prisma.projectTranslation.upsert({
    where: { projectId_locale: { projectId: project.id, locale } },
    update: {
      title: formData.get("title")?.toString() ?? "",
      category: formData.get("category")?.toString() ?? "",
      intro: formData.get("intro")?.toString() ?? "",
      context: formData.get("context")?.toString() ?? "",
      solution: formData.get("solution")?.toString() ?? "",
      impact: (formData.get("impact")?.toString() ?? "").trim() || null,
      contributions,
      highlights,
      challenges,
      impacts,
    },
    create: {
      projectId: project.id,
      locale,
      title: formData.get("title")?.toString() ?? "",
      category: formData.get("category")?.toString() ?? "",
      intro: formData.get("intro")?.toString() ?? "",
      context: formData.get("context")?.toString() ?? "",
      solution: formData.get("solution")?.toString() ?? "",
      impact: (formData.get("impact")?.toString() ?? "").trim() || null,
      contributions,
      highlights,
      challenges,
      impacts,
    },
  });

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath(`/projects/${slug}`);
}

export default async function AdminProjectEditPage({ params, searchParams }) {
  const locale = getLocale(searchParams);
  const { slug } = params;

  const project = await prisma.project.findUnique({
    where: { slug },
    include: { translations: { where: { locale } } },
  });

  if (!project) notFound();

  const t = project.translations[0];

  return (
    <div className="space-y-8">
      <AdminHeader title={`Edit Project: ${slug}`} />
      <LocaleSwitch basePath={`/admin/projects/${slug}`} locale={locale} />

      <form action={updateProjectAction} className="space-y-6">
        <input name="locale" type="hidden" value={locale} />
        <input name="slug" type="hidden" value={slug} />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Title" name="title" defaultValue={t?.title ?? ""} />
          <Field label="Category" name="category" defaultValue={t?.category ?? ""} />
          <Field label="Image URL" name="imageUrl" defaultValue={project.imageUrl ?? ""} />
          <Field label="Demo URL (optional)" name="demoUrl" defaultValue={project.demoUrl ?? ""} />
          <Field label="Role (optional)" name="role" defaultValue={project.role ?? ""} />
          <Field label="Sort Order" name="sortOrder" defaultValue={String(project.sortOrder ?? 0)} />
        </div>

        <div className="flex items-center gap-2">
          <input defaultChecked={project.published} id="published" name="published" type="checkbox" />
          <label className="text-sm" htmlFor="published">Published</label>
        </div>

        <TextArea label="Intro" name="intro" defaultValue={t?.intro ?? ""} />
        <TextArea label="Context" name="context" defaultValue={t?.context ?? ""} />
        <TextArea label="Solution" name="solution" defaultValue={t?.solution ?? ""} />
        <TextArea label="Impact (optional)" name="impact" defaultValue={t?.impact ?? ""} />

        <JsonArea label="Tech (JSON array)" name="tech" defaultValue={JSON.stringify(project.tech ?? [], null, 2)} />
        <JsonArea label="Contributions (JSON array)" name="contributions" defaultValue={JSON.stringify(t?.contributions ?? [], null, 2)} />
        <JsonArea label="Highlights (JSON array)" name="highlights" defaultValue={JSON.stringify(t?.highlights ?? [], null, 2)} />
        <JsonArea label="Challenges (JSON array)" name="challenges" defaultValue={JSON.stringify(t?.challenges ?? [], null, 2)} />
        <JsonArea label="Impacts (JSON array of {value,label})" name="impacts" defaultValue={JSON.stringify(t?.impacts ?? [], null, 2)} />

        <button className="rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-ink" type="submit">
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

function TextArea({ label, name, defaultValue }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="min-h-28 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted"
        defaultValue={defaultValue}
        id={name}
        name={name}
      />
    </div>
  );
}

function JsonArea({ label, name, defaultValue }) {
  return <TextArea label={label} name={name} defaultValue={defaultValue} />;
}
