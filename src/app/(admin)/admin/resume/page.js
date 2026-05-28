import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { AdminHeader, LocaleSwitch } from "../_shared";

function getLocale(searchParams) {
  return searchParams?.locale === "en" ? "en" : "id";
}

async function updateResumeAction(formData) {
  "use server";

  const locale = formData.get("locale") === "en" ? "en" : "id";

  await prisma.resumeContent.upsert({
    where: { locale },
    update: {
      title: formData.get("title")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      pdfUrl: formData.get("pdfUrl")?.toString() ?? "",
    },
    create: {
      locale,
      title: formData.get("title")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      pdfUrl: formData.get("pdfUrl")?.toString() ?? "",
    },
  });

  revalidatePath("/resume");
}

export default async function AdminResumePage({ searchParams }) {
  const locale = getLocale(searchParams);

  const resume = await prisma.resumeContent.findUnique({
    where: { locale },
  });

  return (
    <div className="space-y-8">
      <AdminHeader title="Resume" locale={locale} />
      <LocaleSwitch basePath="/admin/resume" locale={locale} />

      <form action={updateResumeAction} className="space-y-6">
        <input name="locale" type="hidden" value={locale} />

        <Field label="Title" name="title" defaultValue={resume?.title ?? ""} />

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="description">
            Description
          </label>
          <textarea
            className="min-h-28 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted"
            defaultValue={resume?.description ?? ""}
            id="description"
            name="description"
          />
        </div>

        <Field label="PDF URL" name="pdfUrl" defaultValue={resume?.pdfUrl ?? ""} />

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
