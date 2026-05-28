import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import {
  CredentialType,
  Locale,
  PrismaClient,
  Role,
  TechStackIcon,
} from "../src/app/generated/prisma/index.js";

import { en_profile, profile } from "../src/data/profile.js";
import { projects } from "../src/data/projects.js";
import { certifications } from "../src/data/certifications.js";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

const DEFAULT_ADMIN = {
  username: process.env.SEED_ADMIN_USERNAME ?? "admin",
  name: process.env.SEED_ADMIN_NAME ?? "Admin",
  password: process.env.SEED_ADMIN_PASSWORD ?? "admin123",
};

function requireEnv(name, value) {
  if (!value) {
    throw new Error(`Missing required env: ${name}`);
  }
}

function normalizeCredentialType(type) {
  if (type === "Sertifikasi") return CredentialType.Sertifikasi;
  if (type === "Pelatihan") return CredentialType.Pelatihan;
  throw new Error(`Unknown credential type: ${type}`);
}

function normalizeTechStackIcon(iconKey) {
  const map = {
    server: TechStackIcon.server,
    code: TechStackIcon.code,
    cloud: TechStackIcon.cloud,
    database: TechStackIcon.database,
    layers: TechStackIcon.layers,
  };

  const icon = map[iconKey];
  if (!icon) throw new Error(`Unknown tech stack icon: ${iconKey}`);
  return icon;
}

async function seedAdminUser() {
  const passwordHash = await bcrypt.hash(DEFAULT_ADMIN.password, 12);

  await prisma.user.upsert({
    where: { username: DEFAULT_ADMIN.username },
    update: {
      name: DEFAULT_ADMIN.name,
      passwordHash,
      role: Role.admin,
    },
    create: {
      username: DEFAULT_ADMIN.username,
      name: DEFAULT_ADMIN.name,
      passwordHash,
      role: Role.admin,
    },
  });
}

async function upsertProfile(locale, data) {
  await prisma.profile.upsert({
    where: { locale },
    update: {
      name: data.name,
      role: data.role,
      title: data.title,
      email: data.email,
      phone: data.phone,
      location: data.location,
      portrait: data.portrait,
      heading: data.heading,
      subheading: data.subheading,
      tagline: data.tagline,
      focus: data.focus ?? null,
      socials: {
        deleteMany: {},
        create: (data.socials ?? []).map((social, index) => ({
          label: social.label,
          href: social.href,
          order: index,
        })),
      },
    },
    create: {
      locale,
      name: data.name,
      role: data.role,
      title: data.title,
      email: data.email,
      phone: data.phone,
      location: data.location,
      portrait: data.portrait,
      heading: data.heading,
      subheading: data.subheading,
      tagline: data.tagline,
      focus: data.focus ?? null,
      socials: {
        create: (data.socials ?? []).map((social, index) => ({
          label: social.label,
          href: social.href,
          order: index,
        })),
      },
    },
  });
}

async function upsertAbout(locale, { title, paragraphs, techStack }) {
  await prisma.aboutContent.upsert({
    where: { locale },
    update: {
      title,
      paragraphs,
      techStack: {
        deleteMany: {},
        create: techStack.map((category, index) => ({
          title: category.title,
          icon: normalizeTechStackIcon(category.iconKey),
          items: category.items,
          order: index,
        })),
      },
    },
    create: {
      locale,
      title,
      paragraphs,
      techStack: {
        create: techStack.map((category, index) => ({
          title: category.title,
          icon: normalizeTechStackIcon(category.iconKey),
          items: category.items,
          order: index,
        })),
      },
    },
  });
}

async function upsertResume(locale, data) {
  await prisma.resumeContent.upsert({
    where: { locale },
    update: {
      title: data.title,
      description: data.description,
      pdfUrl: data.pdfUrl,
    },
    create: {
      locale,
      title: data.title,
      description: data.description,
      pdfUrl: data.pdfUrl,
    },
  });
}

async function seedProjects() {
  for (let index = 0; index < projects.length; index += 1) {
    const project = projects[index];

    await prisma.project.upsert({
      where: { slug: project.id },
      update: {
        imageUrl: project.image,
        demoUrl: project.link || null,
        role: project.role || null,
        tech: project.tech ?? [],
        published: true,
        sortOrder: index,
      },
      create: {
        slug: project.id,
        imageUrl: project.image,
        demoUrl: project.link || null,
        role: project.role || null,
        tech: project.tech ?? [],
        published: true,
        sortOrder: index,
      },
    });

    const savedProject = await prisma.project.findUnique({
      where: { slug: project.id },
      select: { id: true },
    });

    if (!savedProject) {
      throw new Error(`Project not found after upsert: ${project.id}`);
    }

    await prisma.projectTranslation.upsert({
      where: {
        projectId_locale: {
          projectId: savedProject.id,
          locale: Locale.id,
        },
      },
      update: {
        title: project.title,
        category: project.category,
        intro: project.intro,
        context: project.context,
        solution: project.solution,
        impact: project.impact ?? null,
        contributions: project.contributions ?? [],
        highlights: project.highlights ?? [],
        challenges: project.challenges ?? [],
        impacts: project.impacts ?? null,
      },
      create: {
        projectId: savedProject.id,
        locale: Locale.id,
        title: project.title,
        category: project.category,
        intro: project.intro,
        context: project.context,
        solution: project.solution,
        impact: project.impact ?? null,
        contributions: project.contributions ?? [],
        highlights: project.highlights ?? [],
        challenges: project.challenges ?? [],
        impacts: project.impacts ?? null,
      },
    });
  }
}

async function seedCredentials() {
  for (let index = 0; index < certifications.length; index += 1) {
    const credential = certifications[index];

    await prisma.credential.upsert({
      where: { slug: credential.id },
      update: {
        type: normalizeCredentialType(credential.type),
        issuer: credential.issuer,
        year: credential.year,
        imageUrl: credential.image,
        published: true,
        sortOrder: index,
      },
      create: {
        slug: credential.id,
        type: normalizeCredentialType(credential.type),
        issuer: credential.issuer,
        year: credential.year,
        imageUrl: credential.image,
        published: true,
        sortOrder: index,
      },
    });

    const saved = await prisma.credential.findUnique({
      where: { slug: credential.id },
      select: { id: true },
    });

    if (!saved) {
      throw new Error(`Credential not found after upsert: ${credential.id}`);
    }

    await prisma.credentialTranslation.upsert({
      where: {
        credentialId_locale: {
          credentialId: saved.id,
          locale: Locale.id,
        },
      },
      update: {
        title: credential.title,
        description: credential.description,
        skills: credential.skills ?? [],
      },
      create: {
        credentialId: saved.id,
        locale: Locale.id,
        title: credential.title,
        description: credential.description,
        skills: credential.skills ?? [],
      },
    });
  }
}

async function main() {
  requireEnv("DATABASE_URL", process.env.DATABASE_URL);

  await seedAdminUser();

  await upsertProfile(Locale.id, profile);
  await upsertProfile(Locale.en, en_profile);

  await upsertAbout(Locale.id, {
    title: "Tentang Saya",
    paragraphs: [
      "Saya adalah Full Stack Developer yang tertarik membangun sistem digital yang membantu operasional bisnis menjadi lebih sederhana, terstruktur, dan efisien.",
      "Saya menikmati proses mengubah workflow yang rumit menjadi platform yang lebih mudah digunakan — mulai dari sistem booking, dashboard operasional, hingga automation workflow.",
      "Saat ini saya berfokus pada pengembangan web modern menggunakan Next.js dan Node.js, sambil terus mempelajari system architecture, cloud infrastructure, dan workflow automation.",
      "Bagi saya, teknologi bukan hanya tentang menulis kode, tetapi tentang membangun solusi yang benar-benar digunakan dan memberikan dampak nyata.",
    ],
    techStack: [
      {
        title: "Backend & Architecture",
        iconKey: "server",
        items: ["Node.js", "Python", "PostgreSQL", "Redis"],
      },
      {
        title: "Frontend Experience",
        iconKey: "code",
        items: ["React", "Next.js", "JavaScript", "Tailwind"],
      },
      {
        title: "Cloud & Deployment",
        iconKey: "cloud",
        items: ["AWS", "Docker", "GitHub Actions", "Vercel"],
      },
      {
        title: "System & Workflow",
        iconKey: "database",
        items: ["Automation", "Dashboard System", "API Integration", "CI/CD"],
      },
    ],
  });

  await upsertAbout(Locale.en, {
    title: "About",
    paragraphs: [
      "I am a Full Stack Developer interested in building digital systems that make business operations simpler, structured, and efficient.",
      "I enjoy turning complex workflows into easy-to-use platforms — from booking systems and operational dashboards to workflow automation.",
      "Currently I focus on modern web development with Next.js and Node.js, while continuously learning system architecture, cloud infrastructure, and workflow automation.",
      "For me, technology is not just about writing code, but about building solutions that are actually used and create real impact.",
    ],
    techStack: [
      {
        title: "Backend & Architecture",
        iconKey: "server",
        items: ["Node.js", "Python", "PostgreSQL", "Redis"],
      },
      {
        title: "Frontend Experience",
        iconKey: "code",
        items: ["React", "Next.js", "JavaScript", "Tailwind"],
      },
      {
        title: "Cloud & Deployment",
        iconKey: "cloud",
        items: ["AWS", "Docker", "GitHub Actions", "Vercel"],
      },
      {
        title: "System & Workflow",
        iconKey: "database",
        items: ["Automation", "Dashboard System", "API Integration", "CI/CD"],
      },
    ],
  });

  await upsertResume(Locale.id, {
    title: "Resume",
    description:
      "Ringkasan perjalanan saya dalam membangun kemampuan, project, dan sistem digital yang berfokus pada kebutuhan bisnis nyata",
    pdfUrl: "/resume.pdf",
  });

  await upsertResume(Locale.en, {
    title: "Resume",
    description:
      "A concise summary of my journey building skills, projects, and digital systems focused on real business needs.",
    pdfUrl: "/resume.pdf",
  });

  await seedProjects();
  await seedCredentials();
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
