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

export const en_projects = [
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
      "Designed the booking flow and operational workflow for the web-based rental service.",
      "Built an admin dashboard for managing bookings, inventory, and service catalog.",
      "Developed admin authentication and API layer using Next.js App Router.",
      "Designed the database schema and data relationships using PostgreSQL & Prisma ORM.",
      "Handled deployment and maintenance of the application in the production environment.",
    ],

    intro:
      "A home-service PlayStation rental booking platform that helps customers make reservations more easily while streamlining rental operations.",

    context:
      "The PlayStation rental booking process was previously handled manually through chat. Customers had to inquire about unit availability, pricing, service areas, and booking procedures separately. On the operational side, the admin also had to record bookings and check inventory manually, making the workflow inefficient.",

    solution:
      "To simplify the booking process and rental operations, I built a web-based platform that provides a customer booking system along with an admin dashboard for operational management. The system was built using Next.js App Router with PostgreSQL and Prisma ORM for managing booking data, inventory, game catalog, and rental pricing and packages.",

    highlights: [
      "Responsive booking interface for customers.",
      "Admin dashboard for monitoring rental operations.",
      "Booking management with filtering and search.",
      "PlayStation and TV inventory management.",
      "Dynamic pricing & package management.",
      "Game catalog manageable directly by admin.",
      "Authentication system using NextAuth.js.",
      "Client-side caching and data fetching with React Query.",
    ],

    challenges: [
      "Simplifying the booking process while keeping it easy for customers to understand.",
      "Maintaining synchronization between booking status and rental unit inventory.",
      "Building an operational dashboard that stays simple despite having many workflows.",
      "Optimizing the user experience across both mobile and desktop devices.",
    ],

    impact:
      "Helped centralize booking workflows and rental operations into a single digital platform. The system helps customers understand the reservation process more clearly while enabling the admin to manage bookings and inventory in a more structured way.",

    impacts: [
      {
        value: "Centralized",
        label: "Booking & rental operations workflow",
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
      "Designed the architecture and workflow for the property company's operational platform.",
      "Developed the property website and internal operational system for the company.",
      "Built centralized WhatsApp communication and integrated Twilio for customer communication workflows.",
      "Implemented automated lead distribution workflow and lead data management system for the sales team.",
      "Handled deployment, maintenance, and ongoing development of the production system.",
    ],

    intro:
      "A digital operational platform for a property company that integrates a property website, lead management, centralized WhatsApp communication, automated lead distribution, and sales workflows into a single digital ecosystem.",

    context:
      "Before this system was developed, lead management, customer communication, and sales workflows were handled manually using spreadsheets. The sales team and admin had to manage prospect data, customer follow-ups, lead distribution, WhatsApp communication, activity monitoring, and property management all manually. With operations spanning a parent company and two subsidiaries, this manual workflow risked scattered lead data, slow prospect distribution, and difficulty monitoring sales team performance. Additionally, the company needed a centralized WhatsApp communication solution that was more flexible and cost-efficient than relying on third-party SaaS platforms.",

    solution:
      "I built a digital operational platform to help the property company manage sales workflows, customer communication, and lead distribution in a more centralized manner. The platform consists of a property website, lead management system, centralized WhatsApp communication, agent distribution, operational dashboard, sales activity monitoring, and property management system. By building an internal system, the company can tailor operational workflows to their business needs while reducing dependency on third-party SaaS platforms. The platform has been used in production by approximately 50 employees and supports operations across the parent company and two subsidiaries.",

    highlights: [
      "Property website as a marketing and lead acquisition channel.",
      "Master lead data for centralized prospect management.",
      "Centralized WhatsApp communication with multi-number support.",
      "Automated lead distribution workflow for allocating prospects to agents.",
      "Agent registration and team management for sales operational workflows.",
      "Role-based access management for admin, sales, and team roles.",
      "Property management module to support sales and marketing.",
      "PWA support and web push notifications for daily operations.",
      "Operational ecosystem that replaces manual spreadsheet-based workflows.",
      "Internal communication system that is more flexible than third-party SaaS.",
    ],

    challenges: [
      "Centralizing communication from multiple business WhatsApp numbers into a single dashboard that remains user-friendly.",
      "Designing the lead distribution workflow to match the sales team's operational needs.",
      "Keeping lead data organized despite being used by many users simultaneously.",
      "Managing user roles and access based on the company's organizational structure.",
      "Accommodating the operational needs of the parent company and two subsidiaries within a single platform.",
      "Maintaining system usability for comfortable daily operations at a scale of approximately 50 employees.",
    ],

    impact:
      "The platform helped the company centralize lead management, customer communication, sales distribution, and operational workflows into a single digital system. With centralized communication and automated lead distribution, the sales team and admin can work in a more structured and faster manner, reducing the risk of scattered prospect data and improving customer follow-up consistency. The system also provides the company with an internal communication workflow that is more flexible and cost-efficient compared to relying on third-party SaaS platforms.",

    impacts: [
      {
        value: "50+",
        label: "Employees using the system in production",
      },
      {
        value: "3",
        label: "Company entities supported on one platform",
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
    category: "Multi-Tenant Business Management System",
    image: ["https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745184/image-01_kdndor.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745211/image-02_sxg7nh.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-03_muwvfc.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-04_mb9dfx.png", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-05_es5u7a.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-06_jpr8kf.png", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-07_sxhbfw.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745183/image-08_ps2q40.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745184/image-09_ve2l9o.jpg", "https://res.cloudinary.com/dnmhna2fc/image/upload/v1780745184/image-10_uwmqpj.jpg"],
    link: "#",
    role: "Full Stack Developer",
    
    contributions: [
      "Designed and implemented the multi-tenant SaaS application architecture using Laravel and Vue.js.",
      "Built the authentication system, role-based access control, and data isolation between tenants.",
      "Developed product management, transaction, and reporting modules.",
      "Implemented price snapshots on transactions to maintain historical data integrity.",
      "Built a frontend design system using Tailwind CSS.",
      "Prepared technical documentation and automated testing to ensure system quality."
    ],
    
    intro:
    "A SaaS-based ERP application that helps businesses manage products, transactions, and operational reports through a secure and structured multi-tenant platform.",
    
    context:
    "This project was developed to simulate the needs of a modern SaaS application capable of serving multiple organizations on a single platform, with a focus on data security, access control, and transaction consistency.",
    
    solution:
    "I built a full-stack application using Laravel and Vue.js that supports multi-tenant architecture, role-based permissions, product management, transactions, and a reporting dashboard with data visualization. The system also includes tenant isolation, historical transaction tracking, and automated testing.",
    
    highlights: [
      "Multi-tenant SaaS architecture with shared database",
      "Role-based access control (Owner & Staff)",
      "Product and transaction management",
      "Price snapshots to maintain historical data accuracy",
      "Reporting dashboard with chart visualization",
      "Design system built with Tailwind CSS",
      "Postman Collection and Laravel Feature Tests"
    ],
    
    challenges: [
      "Maintaining data isolation between tenants within a single database.",
      "Ensuring transaction history remains accurate even when product prices change.",
      "Designing an authorization system that is simple yet secure.",
      "Presenting reports and charts based on user-selected date ranges."
    ],
    
    impact:
    "This project demonstrates the ability to build a full-stack application that goes beyond CRUD, encompassing multi-tenant architecture, data security, reporting, documentation, and sound software engineering practices.",
    
    impacts: [
    {
    value: "Multi-Tenant",
    label: "Data isolation architecture"
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
    "Designed the digital workflow for wushu tournament management.",
    "Built the athlete and contingent registration system.",
    "Developed an admin dashboard for data and payment validation.",
    "Designed the database schema to manage relationships between athletes, contingents, categories, and matches.",
    "Helped simplify the tournament data recapitulation process that was previously done manually."
  ],

  intro:
    "A wushu tournament management platform that streamlines participant registration, validation, payment processing, and match data recapitulation.",

  context:
    "Before this system was built, tournament data management was largely handled manually—from athlete registration and contingent data collection to payment validation and match data compilation. This manual process risked scattered data, recapitulation errors, and slowed down tournament administration.",

  solution:
    "I built a web-based tournament management platform to help organizers manage athlete registration, contingent data, payment validation, and match information recapitulation in a single centralized system. With this approach, tournament administration became more organized, easier to monitor, and less dependent on manual record-keeping.",

  highlights: [
    "Athlete and contingent registration system.",
    "Admin dashboard for monitoring participant data.",
    "Participant payment validation.",
    "Match category and class data management.",
    "Relational database structure for athletes, contingents, and matches.",
    "Tournament data recapitulation in a single platform.",
    "More centralized administration workflow."
  ],

  challenges: [
    "Designing a data structure that links athletes, contingents, match classes, and payment statuses.",
    "Simplifying the administration workflow to be easy for organizers to use.",
    "Reducing the risk of data errors from manual recapitulation processes.",
    "Building a system that helps organizers monitor participant and payment statuses more quickly."
  ],

  impact:
    "The system helped organizers centralize tournament administration processes into a single digital platform. Management of athlete data, contingents, payments, and recapitulation became more structured, reducing the risk of scattered data and speeding up administration validation.",

  impacts: [
    {
      value: "Centralized",
      label: "Athlete, contingent, and payment data"
    },
    {
      value: "Structured",
      label: "Tournament administration workflow"
    },
    {
      value: "Reduced",
      label: "Risk of manual recapitulation errors"
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
    "Designed the information architecture for a single-page website.",
    "Developed the landing page and culinary product catalog.",
    "Implemented a responsive user interface.",
    "Displayed product categories, pricing, and contact information on a single page.",
    "Deployed the website to Vercel."
  ],

  intro:
    "A digital product catalog website that helps a culinary brand showcase products, pricing, and contact information in a professional single-page format.",

  context:
    "The client needed a simple digital medium to display culinary products and introduce the brand to customers in a more polished way than relying solely on social media or direct messaging.",

  solution:
    "I built a responsive landing page that serves as a digital product catalog. The website displays a brief brand profile, product highlights, menu categories, product pricing, and contact channels through WhatsApp and Instagram so customers can easily find information and reach the business owner.",

  highlights: [
    "One-page landing page for a culinary brand.",
    "Product catalog showcase organized by menu category.",
    "Easy-to-read product pricing information.",
    "Brand storytelling section to introduce the business.",
    "Contact section with access to WhatsApp and Instagram.",
    "Responsive layout for desktop and mobile.",
    "Deployment using Vercel."
  ],

  challenges: [
    "Displaying multiple product categories without making the page feel too crowded.",
    "Maintaining visual consistency aligned with the culinary brand identity.",
    "Keeping the product catalog easy to read on mobile devices.",
    "Guiding users toward ordering contacts with a simple flow."
  ],

  impact:
    "The website helped centralize Raos Saji's product information on a single, easily accessible digital page. Customers can view the brand profile, product listings, pricing, and ordering contacts without having to search for information separately.",

  impacts: [
    {
      value: "1 Page",
      label: "Product catalog landing page"
    },
    {
      value: "3+",
      label: "Product categories displayed"
    },
    {
      value: "Direct",
      label: "WhatsApp and Instagram contact access"
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

export function getLocalizedProjects(locale) {
  return locale === "en" ? en_projects : projects;
}

export function getProjectById(projectId, locale) {
  const data = getLocalizedProjects(locale);
  return data.find((project) => project.id === projectId);
}

export function getProjectPrimaryImage(project) {
  if (!project?.image) {
    return "";
  }

  return Array.isArray(project.image) ? project.image[0] : project.image;
}

export function getFeaturedProjects(locale) {
  const data = getLocalizedProjects(locale);
  return data.filter((project) => project.featured);
}
