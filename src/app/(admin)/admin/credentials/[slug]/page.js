import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { AdminHeader, LocaleSwitch } from "../../_shared";

function getLocale(searchParams) {
  return searchParams?.locale === "en" ? "en" : "id";
}

async function updateCredentialAction(formData) {
  "use server";

  const locale = formData.get("locale") === "en" ? "en" : "id";
  const slug = formData.get("slug")?.toString() ?? "";

  const skillsRaw = formData.get("skills")?.toString() ?? "[]";
  let skills = [];

  try {
    const value = JSON.parse(skillsRaw);
    skills = Array.isArray(value) ? value.filter((x) => typeof x === "string") : [];
  } catch {
    skills = [];
  }

  const credential = await prisma.credential.findUnique({ where: { slug }, select: { id: true } });
  if (!credential) throw new Error("Credential not found");

  await prisma.credential.update({
    where: { slug },
    data: {
      issuer: formData.get("issuer")?.toString() ?? "",
      year: formData.get("year")?.toString() ?? "",
      imageUrl: formData.get("imageUrl")?.toString() ?? "",
      published: formData.get("published") === "on",
      sortOrder: Number(formData.get("sortOrder") ?? 0),
    },
  });

  await prisma.credentialTranslation.upsert({
    where: { credentialId_locale: { credentialId: credential.id, locale } },
    update: {
      title: formData.get("title")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      skills,
    },
    create: {
      credentialId: credential.id,
      locale,
      title: formData.get("title")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      skills,
    },
  });

  revalidatePath("/about");
  revalidatePath(`/certificates/${slug}`);
}

export default async function AdminCredentialEditPage({ params, searchParams }) {
  const locale = getLocale(searchParams);
  const { slug } = params;

  const credential = await prisma.credential.findUnique({
    where: { slug },
    include: { translations: { where: { locale } } },
  });

  if (!credential) notFound();

  const t = credential.translations[0];

  return (
    <div className="space-y-8">
      <AdminHeader title={`Edit Credential: ${slug}`} />
      <LocaleSwitch basePath={`/admin/credentials/${slug}`} locale={locale} />

      <form action={updateCredentialAction} className="space-y-6">
        <input name="locale" type="hidden" value={locale} />
        <input name="slug" type="hidden" value={slug} />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Title" name="title" defaultValue={t?.title ?? ""} />
          <Field label="Issuer" name="issuer" defaultValue={credential.issuer ?? ""} />
          <Field label="Year" name="year" defaultValue={credential.year ?? ""} />
          <Field label="Image URL" name="imageUrl" defaultValue={credential.imageUrl ?? ""} />
          <Field label="Sort Order" name="sortOrder" defaultValue={String(credential.sortOrder ?? 0)} />
        </div>

        <div className="flex items-center gap-2">
          <input defaultChecked={credential.published} id="published" name="published" type="checkbox" />
          <label className="text-sm" htmlFor="published">Published</label>
        </div>

        <TextArea label="Description" name="description" defaultValue={t?.description ?? ""} />
        <TextArea label="Skills (JSON array)" name="skills" defaultValue={JSON.stringify(t?.skills ?? [], null, 2)} />

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
