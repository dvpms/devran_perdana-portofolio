import { FiDownload, FiFileText } from "react-icons/fi";
import { DEFAULT_LOCALE, getResumeContent } from "@/lib/content";

export const metadata = {
  title: "Resume - Devran Perdana Malik | Full Stack Developer",
};

export const revalidate = 60;

export default async function ResumePage() {
  const resume = await getResumeContent(DEFAULT_LOCALE);
  const title = resume?.title ?? "Resume";
  const description =
    resume?.description ??
    "Ringkasan perjalanan saya dalam membangun kemampuan, project, dan sistem digital yang berfokus pada kebutuhan bisnis nyata";
  const pdfUrl = resume?.pdfUrl ?? "/resume.pdf";

  return (
    <div className="flex h-full flex-col space-y-6 pb-10">
      <div className="animate-fade-in-up mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="flex items-center gap-2 text-3xl font-bold text-foreground">
            <FiFileText
              className="h-6 w-6 text-muted-foreground"
              aria-hidden="true"
            />
            {title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        </div>
        <a
          className="group flex w-max items-center justify-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-ink hover:shadow-md"
          download
          href={pdfUrl}
        >
          <FiDownload
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          Download PDF
        </a>
      </div>

      <div
        className="animate-fade-in-up relative flex min-h-150 w-full flex-1 flex-col items-center justify-center overflow-hidden rounded-md border border-border bg-surface text-muted-foreground opacity-0"
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <div className="absolute inset-4 flex flex-col items-center justify-center rounded-sm border border-border bg-background p-8 text-center shadow-sm transition-transform duration-500 hover:scale-[1.01] sm:inset-8">
          <iframe
            className="h-125 w-full rounded-md border"
            src={pdfUrl}
            title="Resume Devran Perdana Malik"
          />
        </div>
      </div>
    </div>
  );
}
