export const projects = [
  {
    id: "sistem-inventori",
    title: "Sistem Manajemen Inventori Real-time",
    category: "B2B SaaS",
    image: "https://picsum.photos/seed/inventori/1200/600",
    link: "#",
    context:
      "Perusahaan ritel X mengalami selisih stok 15% setiap bulan karena pencatatan manual dan sistem pergudangan yang terfragmentasi di 50+ cabang.",
    solution:
      "Membangun arsitektur microservices menggunakan Node.js dan RabbitMQ untuk sinkronisasi data antar cabang secara instan. Mengimplementasikan algoritma rekonsiliasi otomatis setiap tengah malam.",
    impact:
      "Menurunkan selisih stok menjadi < 1% dalam 3 bulan pertama. Menghemat waktu audit mingguan sebesar 40 jam kerja per cabang.",
    tech: ["Node.js", "RabbitMQ", "PostgreSQL", "Docker", "AWS ECS"],
  },
  {
    id: "otomatisasi-onboarding",
    title: "Otomatisasi Pipeline Onboarding Karyawan",
    category: "Internal Tool",
    image: "https://picsum.photos/seed/onboarding/1200/600",
    link: "#",
    context:
      "Tim HR menghabiskan rata-rata 3 hari untuk menyiapkan akun, akses sistem, dan dokumen legal untuk karyawan baru yang masuk (hiring 50+ orang/bulan).",
    solution:
      "Mengembangkan integrasi API antara sistem HRIS (Workday) dengan Google Workspace dan sistem akses internal menggunakan Python script yang diorkestrasi via GitHub Actions.",
    impact:
      "Proses provisioning akses berkurang dari 3 hari menjadi 15 menit. Menghilangkan 100% human error dalam pemberian hak akses sensitif.",
    tech: ["Python", "GitHub Actions", "Workday API", "Google Workspace API"],
  },
];

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}

