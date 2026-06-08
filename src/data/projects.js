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
  {
    id: "mini-erp-saas",
    title: "ERP SaaS",
    category: "Sistem Manajemen Bisnis Multi-Tenant",
    image: ["https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745184/image-01_kdndor.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745211/image-02_sxg7nh.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-03_muwvfc.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-04_mb9dfx.png", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-05_es5u7a.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-06_jpr8kf.png", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-07_sxhbfw.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-08_ps2q40.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745184/image-09_ve2l9o.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745184/image-10_uwmqpj.jpg"],
    link: "#",
    role: "Full Stack Developer",
    
    contributions: [
      "Merancang dan mengimplementasikan arsitektur aplikasi SaaS multi-tenant menggunakan Laravel dan Vue.js.",
      "Membangun sistem autentikasi, role-based access control, dan isolasi data antar tenant.",
      "Mengembangkan modul manajemen produk, transaksi, dan pelaporan.",
      "Mengimplementasikan price snapshot pada transaksi untuk menjaga integritas data historis.",
      "Membangun design system frontend menggunakan Tailwind CSS.",
      "Menyusun dokumentasi teknis serta automated testing untuk memastikan kualitas sistem."
    ],
    
    intro:
    "Aplikasi ERP berbasis SaaS yang membantu bisnis mengelola produk, transaksi, dan laporan operasional melalui platform multi-tenant yang aman dan terstruktur.",
    
    context:
    "Proyek ini dikembangkan untuk mensimulasikan kebutuhan aplikasi SaaS modern yang mampu melayani banyak organisasi dalam satu platform, dengan fokus pada keamanan data, kontrol akses, dan konsistensi transaksi.",
    
    solution:
    "Saya membangun aplikasi full-stack menggunakan Laravel dan Vue.js yang mendukung multi-tenant architecture, role-based permissions, manajemen produk, transaksi, serta dashboard laporan dengan visualisasi data. Sistem juga dilengkapi dengan tenant isolation, historical transaction tracking, dan automated testing.",
    
    highlights: [
      "Arsitektur SaaS multi-tenant dengan shared database",
      "Role-based access control (Owner & Staff)",
      "Manajemen produk dan transaksi",
      "Price snapshot untuk menjaga akurasi data historis",
      "Dashboard laporan dengan visualisasi grafik",
      "Design system berbasis Tailwind CSS",
      "Postman Collection dan Laravel Feature Tests"
    ],
    
    challenges: [
      "Menjaga isolasi data antar tenant dalam satu database.",
      "Memastikan histori transaksi tetap akurat meskipun harga produk berubah.",
      "Merancang sistem otorisasi yang sederhana namun aman.",
      "Menyajikan laporan dan grafik berdasarkan rentang tanggal yang dipilih pengguna."
    ],
    
    impact:
    "Proyek ini menunjukkan kemampuan membangun aplikasi full-stack yang tidak hanya berfokus pada CRUD, tetapi juga mencakup arsitektur multi-tenant, keamanan data, pelaporan, dokumentasi, dan praktik software engineering yang baik.",
    
    impacts: [
    {
    value: "Multi-Tenant",
    label: "Arsitektur isolasi data"
    },
    {
    value: "2 Role",
    label: "Owner & Staff"
    },
    {
    value: "Tested",
    label: "Postman & Feature Tests"
    },
    {
    value: "Full Stack",
    label: "Laravel & Vue.js"
    }
    ],
    
    tech: [
    "Laravel",
    "Laravel Sanctum",
    "MySQL",
    "Vue 3",
    "Pinia",
    "Vue Router",
    "Axios",
    "Tailwind CSS",
    "Chart.js",
    "SweetAlert2",
    "Postman",
    "PHPUnit"
    ]
    },
  {
  id: "wushu-tournament-system",
  title: "Wushu Tournament System",
  category: "Tournament Management Platform",
  image: ["https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-01_up6ixx.jpg",
          "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-02_kekojs.jpg",
          "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-03_hrn5rh.jpg",
          "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-04_pyg8pa.jpg",
          "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-05_aprcs6.jpg",
          "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-06_zx3e7p.jpg",
          "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-07_eg29ry.jpg",
         ],
  link: "https://www.bupaticup.site/",
  featured: true,
  role: "Full Stack Developer",

  contributions: [
    "Merancang workflow digital untuk pengelolaan turnamen wushu.",
    "Membangun sistem pendaftaran peserta dan kontingen.",
    "Mengembangkan dashboard admin untuk validasi data dan pembayaran.",
    "Mendesain struktur database untuk mengelola relasi atlet, kontingen, kategori, dan pertandingan.",
    "Membantu menyederhanakan proses rekapitulasi data turnamen yang sebelumnya dilakukan secara manual."
  ],

  intro:
    "Platform manajemen turnamen wushu untuk membantu proses pendaftaran, validasi peserta, pembayaran, dan rekapitulasi data pertandingan menjadi lebih terstruktur.",

  context:
    "Sebelum sistem ini dibuat, pengelolaan data turnamen masih banyak dilakukan secara manual, mulai dari pendaftaran atlet, pendataan kontingen, validasi pembayaran, hingga penyusunan data pertandingan. Proses manual ini berisiko menyebabkan data tercecer, kesalahan rekapitulasi, dan memperlambat proses administrasi turnamen.",

  solution:
    "Saya membangun platform manajemen turnamen berbasis web untuk membantu panitia mengelola pendaftaran atlet, data kontingen, validasi pembayaran, dan rekapitulasi informasi pertandingan dalam satu sistem terpusat. Dengan pendekatan ini, proses administrasi turnamen menjadi lebih rapi, mudah dipantau, dan mengurangi ketergantungan pada pencatatan manual.",

  highlights: [
    "Sistem pendaftaran atlet dan kontingen.",
    "Dashboard admin untuk monitoring data peserta.",
    "Validasi pembayaran peserta.",
    "Pengelolaan data kategori dan kelas pertandingan.",
    "Struktur database relasional untuk atlet, kontingen, dan pertandingan.",
    "Rekapitulasi data turnamen dalam satu platform.",
    "Workflow administrasi yang lebih terpusat."
  ],

  challenges: [
    "Mendesain struktur data yang mampu menghubungkan atlet, kontingen, kelas pertandingan, dan status pembayaran.",
    "Menyederhanakan workflow administrasi agar mudah digunakan oleh panitia.",
    "Mengurangi risiko kesalahan data akibat proses rekapitulasi manual.",
    "Membuat sistem yang dapat membantu panitia memantau status peserta dan pembayaran secara lebih cepat."
  ],

  impact:
    "Sistem ini membantu panitia memusatkan proses administrasi turnamen dalam satu platform digital. Pengelolaan data atlet, kontingen, pembayaran, dan rekapitulasi menjadi lebih terstruktur sehingga mengurangi risiko data tercecer dan mempercepat proses validasi administrasi.",

  impacts: [
    {
      value: "Centralized",
      label: "Data atlet, kontingen, dan pembayaran"
    },
    {
      value: "Structured",
      label: "Workflow administrasi turnamen"
    },
    {
      value: "Reduced",
      label: "Risiko kesalahan rekapitulasi manual"
    }
  ],

  tech: [
    "React",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Vercel"
  ]
},
  {
  id: "raos-saji-digital-catalog",
  title: "Raos Saji",
  category: "Digital Product Catalog",
  image: [
    "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-01_z9dkyr.jpg",
    "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-02_tygoyh.jpg",
    "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-03_t90dcb.jpg",
    "https://res.cloudinary.com/dnmhna2fc/image/upload/q_auto:best/e_upscale/image-04_gyigm0.jpg"
  ],
  link: "https://raos-saji-web.vercel.app/",
  role: "Frontend Developer",

  contributions: [
    "Merancang struktur informasi website satu halaman.",
    "Mengembangkan landing page dan katalog produk kuliner.",
    "Mengimplementasikan responsive user interface.",
    "Menampilkan kategori produk, harga, dan informasi kontak dalam satu halaman.",
    "Melakukan deployment website ke Vercel."
  ],

  intro:
    "Website katalog produk digital untuk membantu brand kuliner menampilkan produk, harga, dan informasi kontak secara lebih profesional dalam satu halaman.",

  context:
    "Klien membutuhkan media digital sederhana untuk menampilkan produk kuliner dan memperkenalkan brand kepada pelanggan secara lebih rapi dibanding hanya mengandalkan media sosial atau komunikasi langsung.",

  solution:
    "Saya membangun landing page responsif yang berfungsi sebagai katalog produk digital. Website ini menampilkan profil singkat brand, keunggulan produk, kategori menu, harga produk, serta kanal kontak melalui WhatsApp dan Instagram agar pelanggan lebih mudah menemukan informasi dan menghubungi pemilik usaha.",

  highlights: [
    "One-page landing page untuk brand kuliner.",
    "Product catalog showcase berdasarkan kategori menu.",
    "Informasi harga produk yang mudah dibaca.",
    "Brand storytelling section untuk memperkenalkan bisnis.",
    "Contact section dengan akses ke WhatsApp dan Instagram.",
    "Responsive layout untuk desktop dan mobile.",
    "Deployment menggunakan Vercel."
  ],

  challenges: [
    "Menampilkan beberapa kategori produk tanpa membuat halaman terasa terlalu padat.",
    "Menjaga konsistensi visual agar sesuai dengan identitas brand kuliner.",
    "Membuat katalog produk tetap mudah dibaca di perangkat mobile.",
    "Mengarahkan pengguna menuju kontak pemesanan dengan alur yang sederhana."
  ],

  impact:
    "Website ini membantu memusatkan informasi produk Raos Saji dalam satu halaman digital yang mudah diakses. Pelanggan dapat melihat profil brand, daftar produk, harga, dan kontak pemesanan tanpa harus mencari informasi secara terpisah.",

  impacts: [
    {
      value: "1 Page",
      label: "Landing page katalog produk"
    },
    {
      value: "3+",
      label: "Kategori produk ditampilkan"
    },
    {
      value: "Direct",
      label: "Akses kontak WhatsApp dan Instagram"
    }
  ],

  tech: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Vercel"
  ]
}

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
