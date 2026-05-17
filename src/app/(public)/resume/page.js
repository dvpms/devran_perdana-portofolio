import { FiDownload, FiFileText } from "react-icons/fi";

export const metadata = {
  title: "Resume - Devran Perdana Malik | Full Stack Developer",
};

export default function ResumePage() {
  return (
    <div className="flex h-full flex-col space-y-6 pb-10">
      <div className="animate-fade-in-up mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="flex items-center gap-2 text-3xl font-bold text-foreground">
          <FiFileText className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          Curriculum Vitae
        </h1>
        <a
          className="group flex w-max items-center justify-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-ink hover:shadow-md"
          download
          href="/resume.pdf"
        >
          <FiDownload className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          Download PDF
        </a>
      </div>

      <div
        className="animate-fade-in-up relative flex min-h-[600px] w-full flex-1 flex-col items-center justify-center overflow-hidden rounded-md border border-border bg-surface text-muted-foreground opacity-0"
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <div className="absolute inset-4 flex flex-col items-center justify-center rounded-sm border border-border bg-background p-8 text-center shadow-sm transition-transform duration-500 hover:scale-[1.01] sm:inset-8">
          <iframe
            className="h-[500px] w-full rounded-md border"
            src="/resume.pdf"
            title="Curriculum Vitae Devran Perdana Malik"
          />
        </div>
      </div>
    </div>
  );
}

