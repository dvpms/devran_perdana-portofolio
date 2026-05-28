import Link from "next/link";

export function AdminHeader({ title, locale }) {
  const localeParam = locale ? `?locale=${locale}` : "";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Admin</p>
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <Link className="rounded-sm border border-border px-3 py-1.5 hover:bg-surface" href={`/admin${localeParam}`}>
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export function LocaleSwitch({ basePath, locale }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Locale:</span>
      <Link
        className={`rounded-sm border border-border px-2.5 py-1 ${
          locale === "id" ? "bg-surface" : "hover:bg-surface"
        }`}
        href={`${basePath}?locale=id`}
      >
        ID
      </Link>
      <Link
        className={`rounded-sm border border-border px-2.5 py-1 ${
          locale === "en" ? "bg-surface" : "hover:bg-surface"
        }`}
        href={`${basePath}?locale=en`}
      >
        EN
      </Link>
    </div>
  );
}

export function FormStatus({ message }) {
  if (!message) return null;

  return (
    <p className="rounded-sm border border-border bg-surface px-3 py-2 text-sm text-foreground">
      {message}
    </p>
  );
}
