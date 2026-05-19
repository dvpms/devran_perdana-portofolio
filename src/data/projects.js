/*
bagian intro sebaiknya:
memberikan teaser saja.
Detail penuh nanti di halaman project detail.

Contoh sekarang:
Perusahaan ritel X mengalami selisih stok 15%...

Terlalu panjang untuk listing.
Lebih baik seperti ini:
Sistem inventori real-time untuk membantu sinkronisasi stok dan mengurangi kesalahan pencatatan antar cabang.
Atau:
Platform inventori yang dirancang untuk mengurangi selisih stok dan mempercepat proses audit operasional.

Lebih singkat → lebih impactful.
*/

/*
Contoh category yang lebih kuat

Daripada:
Internal Tool / B2B SaaS

lebih baik:
- Operational Dashboard
- Workflow Automation
- Booking Management System
- Tournament Management Platform
- Property Management Platform

Karena lebih spesifik dan believable.
*/

/*
Agar context lebih kuat:

Contoh:
Proses pencatatan stok masih dilakukan secara manual dan tersebar di banyak cabang, menyebabkan perbedaan data inventori serta memperlambat proses audit operasional.
Atau:
Penyewa kesulitan mengetahui jadwal PlayStation yang tersedia karena proses booking masih dilakukan melalui chat manual tanpa sistem availability tracking.

Karena recruiter ingin tahu:
“Masalah nyata apa yang diselesaikan?”
*/

/*
Untuk bagian solusi,
Itu technically bagus.

Tapi:
kurang storytelling,
dan terlalu cepat masuk technical detail.
Yang lebih baik:

Mulai dari:
pendekatan,
baru teknis.

Contoh:
Untuk mengatasi sinkronisasi data antar cabang, saya membangun sistem backend berbasis event-driven architecture menggunakan Node.js dan RabbitMQ agar perubahan stok dapat diperbarui secara real-time.

Lalu lanjut:
PostgreSQL,
Docker,
dll.
*/

/*
Bagian dampk bisnis disarankan:
buat seperti metrics/highlight card.
Contoh:

Impact
Menurunkan selisih stok hingga <1%
Menghemat 40 jam audit mingguan
Sinkronisasi data antar cabang secara real-time
*/
export const projects = [
  {
    id: "sistem-inventori",
    title: "Sistem Manajemen Inventori Real-time",
    category: "B2B SaaS",
    image: "https://picsum.photos/seed/inventori/1200/600",
    link: "#",
    role: "Full Stack Developer",
    contributions: [
      "Merancang arsitektur event-driven untuk sinkronisasi stok antar cabang.",
      "Membangun API dan pipeline rekonsiliasi untuk menjaga konsistensi data.",
      "Menyusun strategi observability (logging/metrics) untuk audit & debugging.",
    ],
    intro:
      "Sistem inventori real-time untuk membantu sinkronisasi stok dan mengurangi kesalahan pencatatan antar cabang.",
    context:
      "Perusahaan ritel X mengalami selisih stok 15% setiap bulan, menyebabkan kerugian finansial dan ketidakpuasan pelanggan. Proses audit manual memakan waktu hingga 20 jam per minggu per cabang.",
    solution:
      "Membangun arsitektur microservices menggunakan Node.js dan RabbitMQ untuk sinkronisasi data antar cabang secara instan. Mengimplementasikan algoritma rekonsiliasi otomatis setiap tengah malam.",
    highlights: [
      "Sinkronisasi stok antar cabang secara real-time.",
      "Event-driven messaging dengan RabbitMQ untuk update instan.",
      "Rekonsiliasi otomatis tiap malam untuk menjaga konsistensi.",
      "Monitoring operasional untuk audit dan anomali stok.",
    ],
    challenges: [
      "Menjaga konsistensi data saat terjadi update bersamaan antar cabang.",
      "Mendesain proses rekonsiliasi agar idempotent dan aman saat retry.",
      "Memastikan sistem tetap stabil saat throughput pesan meningkat.",
    ],
    impact:
      "Menurunkan selisih stok menjadi < 1% dalam 3 bulan pertama. Menghemat waktu audit mingguan sebesar 40 jam kerja per cabang.",
    impacts: [
      { value: "< 1%", label: "Selisih stok setelah 3 bulan" },
      { value: "40 jam", label: "Hemat waktu audit mingguan per cabang" },
      { value: "Real-time", label: "Update stok lintas cabang" },
    ],
    tech: ["Node.js", "RabbitMQ", "PostgreSQL", "Docker", "AWS ECS"],
  },
  {
    id: "otomatisasi-onboarding",
    title: "Otomatisasi Pipeline Onboarding Karyawan",
    category: "Workflow Automation",
    image: "https://picsum.photos/seed/onboarding/1200/600",
    link: "#",
    role: "Automation Engineer",
    contributions: [
      "Mendesain workflow provisioning akses end-to-end yang otomatis dan terukur.",
      "Mengintegrasikan Workday, Google Workspace, dan sistem internal via API.",
      "Menambahkan guardrails (retry/idempotency) untuk mengurangi error operasional.",
    ],
    intro:
      "Otomatisasi proses onboarding karyawan untuk mengurangi waktu dan usaha yang diperlukan dalam menyiapkan akun, akses sistem, dan dokumen legal.",
    context:
      "Perusahaan menghadapi tantangan dalam proses onboarding karyawan baru yang memakan waktu hingga 3 hari kerja, dengan risiko human error dalam pemberian akses sistem yang sensitif.",
    solution:
      "Mengembangkan integrasi API antara sistem HRIS (Workday) dengan Google Workspace dan sistem akses internal menggunakan Python script yang diorkestrasi via GitHub Actions.",
    highlights: [
      "Integrasi Workday ke Google Workspace dan sistem internal.",
      "Pipeline provisioning otomatis via GitHub Actions.",
      "Template akses berbasis role untuk konsistensi permission.",
      "Auditability lewat logging untuk tiap langkah provisioning.",
    ],
    challenges: [
      "Memastikan provisioning idempotent untuk mencegah duplikasi akun/akses.",
      "Mengatur alur approval tanpa membuat proses menjadi kompleks.",
      "Menangani error eksternal API dengan retry dan fallback yang aman.",
    ],
    impact:
      "Proses provisioning akses berkurang dari 3 hari menjadi 15 menit. Menghilangkan 100% human error dalam pemberian hak akses sensitif.",
    impacts: [
      { value: "15 menit", label: "Provisioning akses dari 3 hari" },
      { value: "100%", label: "Eliminasi human error hak akses sensitif" },
      { value: "Automated", label: "Pipeline onboarding end-to-end" },
    ],
    tech: ["Python", "GitHub Actions", "Workday API", "Google Workspace API"],
  },
];

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}
