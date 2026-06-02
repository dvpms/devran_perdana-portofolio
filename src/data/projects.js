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
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-12_o2cr6f.png",
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
    id: "s-property-platform",
    title: "S-Property Platform",
    category: "Property Management Platform",
    image: [
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-01_iwqqqf.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-02_ldwufl.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-03_g4llqm.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-4_pytsra.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-05_dbowus.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-06_s4wag5.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-07_o5kjsp.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-08_xrpvl7.jpg",
      "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto/f_auto/image-09_ohpkfg.jpg",
    ],
    link: "https://s-property-web.vercel.app/",
    featured: true,
    role: "Lead Software Engineer / Full Stack Developer",

    contributions: [
      "Merancang arsitektur dan workflow platform operasional perusahaan properti.",
      "Mengembangkan website properti dan sistem operasional internal untuk perusahaan.",
      "Membangun centralized WhatsApp communication dan mengintegrasikan Twilio untuk workflow komunikasi pelanggan.",
      "Mengimplementasikan automation lead distribution workflow dan sistem data leads untuk tim sales.",
      "Melakukan deployment, maintenance, dan pengembangan production system.",
    ],

    intro:
      "Platform operasional digital untuk perusahaan properti yang mengintegrasikan website properti, manajemen lead, komunikasi WhatsApp terpusat, distribusi leads otomatis, dan workflow sales dalam satu ekosistem digital.",

    context:
      "Sebelum sistem ini dikembangkan, pengelolaan lead, komunikasi pelanggan, dan workflow sales masih dilakukan secara manual dan berbasis spreadsheet. Tim sales dan admin perlu menangani data prospek, follow-up pelanggan, distribusi lead, komunikasi WhatsApp, monitoring aktivitas, hingga pengelolaan properti secara manual. Dengan operasional yang melibatkan perusahaan utama dan dua anak perusahaan, workflow manual ini berpotensi menyebabkan data lead tercecer, distribusi prospek yang lambat, dan sulitnya monitoring performa tim sales. Selain itu, perusahaan juga membutuhkan solusi komunikasi WhatsApp terpusat yang lebih fleksibel dan efisien dibanding menggunakan platform SaaS pihak ketiga dengan biaya operasional yang tinggi.",

    solution:
      "Saya membangun platform operasional digital untuk membantu perusahaan properti mengelola workflow sales, komunikasi pelanggan, dan distribusi lead secara lebih terpusat. Platform ini terdiri dari website properti, sistem manajemen lead, centralized WhatsApp communication, distribusi agent, dashboard operasional, monitoring aktivitas sales, serta sistem pengelolaan properti. Dengan membangun sistem internal sendiri, perusahaan dapat menyesuaikan workflow operasional sesuai kebutuhan bisnis sekaligus mengurangi ketergantungan terhadap platform SaaS pihak ketiga. Platform ini telah digunakan secara production oleh sekitar 50 karyawan dan mendukung operasional perusahaan utama beserta dua anak perusahaan.",

    highlights: [
      "Website properti sebagai media marketing dan akuisisi lead.",
      "Master data lead untuk pengelolaan prospek secara terpusat.",
      "Centralized WhatsApp communication dengan dukungan multi-number.",
      "Automation lead distribution workflow untuk alokasi prospek kepada agent.",
      "Agent registration dan team management untuk workflow operasional sales.",
      "Role-based access management untuk admin, sales, dan team.",
      "Property management module untuk mendukung sales dan marketing.",
      "PWA support dan web push notification untuk mendukung operasional harian.",
      "Operational ecosystem yang menggantikan workflow manual berbasis spreadsheet.",
      "Sistem komunikasi internal yang lebih fleksibel dibanding SaaS pihak ketiga.",
    ],

    challenges: [
      "Memusatkan komunikasi dari beberapa nomor WhatsApp bisnis ke dalam satu dashboard yang tetap mudah digunakan.",
      "Mendesain workflow distribusi lead agar sesuai dengan kebutuhan operasional tim sales.",
      "Menjaga data lead tetap rapi meskipun digunakan oleh banyak pengguna secara bersamaan.",
      "Mengelola role dan akses pengguna berdasarkan struktur organisasi perusahaan.",
      "Menyesuaikan kebutuhan operasional perusahaan utama dan dua anak perusahaan dalam satu platform.",
      "Menjaga usability sistem agar tetap nyaman digunakan untuk operasional harian dengan skala sekitar 50 karyawan.",
    ],

    impact:
      "Platform ini membantu perusahaan memusatkan pengelolaan lead, komunikasi pelanggan, distribusi sales, dan workflow operasional dalam satu sistem digital. Dengan centralized communication dan automation lead distribution, tim sales dan admin dapat bekerja lebih terstruktur dan cepat, mengurangi risiko data prospek tercecer, serta meningkatkan konsistensi follow-up pelanggan. Sistem ini juga membantu perusahaan memiliki workflow komunikasi internal yang lebih fleksibel dan lebih efisien dibanding bergantung pada platform SaaS pihak ketiga.",

    impacts: [
      {
        value: "50+",
        label: "Karyawan menggunakan sistem di production",
      },
      {
        value: "3",
        label: "Entitas perusahaan didukung dalam satu platform",
      },
      {
        value: "Centralized",
        label: "WhatsApp communication & lead management",
      },
      {
        value: "Automated",
        label: "Lead distribution workflow",
      },
    ],

    tech: [
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Redux Toolkit",
      "MongoDB",
      "Twilio",
      "Cloudinary",
      "+7 more",
      ],
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
