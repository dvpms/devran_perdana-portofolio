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
    id: "pangeranplaystation-booking-system",
    title: "Pangeran PlayStation",
    category: "Booking Management System",
    featured: true,
    image: [
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-01_uy835s.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-02_qob0uz.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-03_l6n7eg.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-04_bk4qrx.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-05_jda8im.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-06_fyodbs.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-07_f1yzfo.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-08_o9oxg1.png",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-09_gqkxe9.png",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-10_je7nne.png",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-11_qnkono.png",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-12_o2cr6f.png"
    ],
    link: "https://www.pangeranplaystation.my.id/",
    role: "Full Stack Developer",

    contributions: [
      "Merancang alur booking dan workflow operasional rental berbasis web.",
      "Membangun dashboard admin untuk pengelolaan booking, inventori, dan katalog layanan.",
      "Mengembangkan sistem autentikasi admin dan API berbasis Next.js App Router.",
      "Mendesain struktur database dan relasi data menggunakan PostgreSQL & Prisma ORM.",
      "Melakukan deployment dan maintenance aplikasi pada environment production.",
    ],

    intro:
      "Platform booking rental PlayStation berbasis home-service untuk membantu pelanggan melakukan reservasi lebih mudah sekaligus membantu operasional rental menjadi lebih terstruktur.",

    context:
      "Proses booking rental PlayStation sebelumnya masih dilakukan secara manual melalui chat. Pelanggan harus menanyakan ketersediaan unit, harga, area layanan, dan proses pemesanan secara terpisah. Di sisi operasional, admin juga harus mencatat booking dan mengecek inventori secara manual sehingga workflow menjadi kurang efisien.",

    solution:
      "Untuk membantu menyederhanakan proses booking dan operasional rental, saya membangun platform berbasis web yang menyediakan sistem booking pelanggan sekaligus dashboard administrasi untuk pengelolaan operasional. Sistem ini dibangun menggunakan Next.js App Router dengan PostgreSQL dan Prisma ORM untuk pengelolaan data booking, inventori, katalog game, serta manajemen harga dan paket rental.",

    highlights: [
      "Responsive booking interface untuk pelanggan.",
      "Dashboard admin untuk monitoring operasional rental.",
      "Manajemen booking dengan filter dan pencarian.",
      "Pengelolaan inventori PlayStation dan TV.",
      "Dynamic pricing & package management.",
      "Katalog game yang dapat dikelola langsung oleh admin.",
      "Authentication system menggunakan NextAuth.js.",
      "Client-side caching dan data fetching dengan React Query.",
    ],

    challenges: [
      "Menyederhanakan proses booking agar tetap mudah dipahami pelanggan.",
      "Menjaga sinkronisasi antara status booking dan inventori unit rental.",
      "Membuat dashboard operasional yang tetap sederhana meskipun memiliki banyak workflow.",
      "Mengoptimalkan pengalaman penggunaan pada perangkat mobile maupun desktop.",
    ],

    impact:
      "Membantu memusatkan workflow booking dan operasional rental dalam satu platform digital. Sistem ini membantu pelanggan memahami proses reservasi dengan lebih jelas sekaligus membantu admin mengelola booking dan inventori secara lebih terstruktur.",

    impacts: [
      {
        value: "Centralized",
        label: "Workflow booking & operasional rental",
      },
      {
        value: "Structured",
        label: "Booking management workflow",
      },
      {
        value: "Responsive",
        label: "Customer booking experience",
      },
    ],

    tech: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS v4",
      "NextAuth.js",
      "TanStack React Query",
      "Axios",
      "Zod",
      "Framer Motion",
      "Nodemailer",
      "Vercel",
    ],
  },
  {
    id: "otomatisasi-onboarding",
    title: "Otomatisasi Pipeline Onboarding Karyawan",
    category: "Workflow Automation",
    featured: false,
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

export function getProjectPrimaryImage(project) {
  if (!project?.image) {
    return "";
  }

  return Array.isArray(project.image) ? project.image[0] : project.image;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
