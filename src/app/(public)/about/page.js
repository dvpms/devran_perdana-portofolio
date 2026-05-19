import {
  FiAward,
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiUser,
} from "react-icons/fi";
import CredentialTable from "@/components/public/CredentialTable";
import SectionHeading from "@/components/public/SectionHeading";
import { getCertificationsByType } from "@/data/certifications";

const techStack = [
  {
    title: "Backend & Architecture",
    icon: FiServer,
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend Experience",
    icon: FiCode,
    items: ["React", "Next.js", "JavaScript", "Tailwind"],
  },
  {
    title: "Cloud & Deployment",
    icon: FiCloud,
    items: ["AWS", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    title: "System & Workflow",
    icon: FiDatabase,
    items: ["Automation", "Dashboard System", "API Integration", "CI/CD"],
  },
];

export const metadata = {
  title: "About - Devran Perdana Malik | Full Stack Developer",
};

export default function AboutPage() {
  const certificationRows = getCertificationsByType("Sertifikasi");
  const trainingRows = getCertificationsByType("Pelatihan");

  return (
    <div className="space-y-16 pb-10">
      <section className="animate-fade-in-up space-y-6">
        <h1 className="mb-3 flex items-center gap-2 text-3xl font-bold text-foreground">
          <FiUser className="h-6 w-6" />
          Tentang Saya
        </h1>
        <div className="space-y-4 text-lg leading-relaxed text-foreground">
          <p>
            Saya adalah Full Stack Developer yang tertarik membangun sistem
            digital yang membantu operasional bisnis menjadi lebih sederhana,
            terstruktur, dan efisien.
          </p>
          <p>
            Saya menikmati proses mengubah workflow yang rumit menjadi platform
            yang lebih mudah digunakan — mulai dari sistem booking, dashboard
            operasional, hingga automation workflow.
          </p>
          <p>
            Saat ini saya berfokus pada pengembangan web modern menggunakan
            Next.js dan Node.js, sambil terus mempelajari system architecture,
            cloud infrastructure, dan workflow automation.
          </p>
          <p>
            Bagi saya, teknologi bukan hanya tentang menulis kode, tetapi
            tentang membangun solusi yang benar-benar digunakan dan memberikan
            dampak nyata.
          </p>
        </div>
      </section>

      <div
        className="animate-fade-in-up w-full border-t border-border"
        style={{ animationDelay: "100ms" }}
      />

      <section
        className="animate-fade-in-up space-y-6 opacity-0"
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <SectionHeading icon={FiLayers} title="Tech Stack & Tools" />
        <div className="grid gap-6 sm:grid-cols-2">
          {techStack.map((category) => {
            const Icon = category.icon;

            return (
              <div
                className="rounded-md border border-border bg-background p-5 transition-colors duration-300 hover:border-muted-foreground"
                key={category.title}
              >
                <h3 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      className="rounded-sm border border-border bg-muted px-2.5 py-1 text-sm text-foreground transition-colors hover:bg-background"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div
        className="animate-fade-in-up w-full border-t border-border"
        style={{ animationDelay: "300ms" }}
      />

      <section
        className="animate-fade-in-up space-y-6 opacity-0"
        style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
      >
        <SectionHeading icon={FiAward} title="Sertifikasi & Pelatihan" />
        <div className="space-y-8">
          <CredentialTable
            credentials={certificationRows}
            title="Sertifikasi"
            type="Sertifikasi"
          />
          <CredentialTable
            credentials={trainingRows}
            title="Pelatihan"
            type="Pelatihan"
          />
        </div>
      </section>
    </div>
  );
}
