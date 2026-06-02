## Plan: Migrasi Konten ke Database + Internal CMS

Kita akan memindahkan konten portfolio (Home, About, Projects, Resume—termasuk Certifications yang dipakai di About) dari hardcoded JS (`src/data/*` dan teks di page) ke PostgreSQL via Prisma, lalu membuat internal CMS di area `/admin` untuk mengelola konten secara dinamis. Public pages tetap memakai App Router server components dan memakai ISR (revalidate) agar konten baru cepat tampil tanpa SSR penuh.

**Scope**
- In-scope: konten untuk Home, About, Projects (list + detail), Resume (link/PDF source), Certifications/Trainings (karena tampil di About + halaman detail `/certificates/[id]`), Profile data yang dipakai global (Sidebar/MobileHeader/footer).
- Out-of-scope (untuk mencegah overbuild): upload file/media storage (resume/image) ke storage provider; fitur WYSIWYG editor; role management kompleks; multi-tenant.

**Steps**
1. Audit konten & kontrak UI (baseline)
   - Inventaris semua field yang dipakai UI dari:
     - `src/data/profile.js` (`profile`, `en_profile`, `socials`, heading/subheading/tagline, contact)
     - `src/data/projects.js` (project fields: slug/id, title, category, intro, context, solution, highlights, challenges, impacts, contributions, tech, image, link, role)
     - `src/data/certifications.js` (credential fields: id, type, issuer, year, image, description, skills)
     - `src/app/(public)/about/page.js` (paragraphs + `techStack` array)
     - `src/app/(public)/resume/page.js` (resume PDF URL)
   - Hasil audit menjadi “Content Model Contract” yang jadi acuan Prisma schema + form admin.

2. Desain data model Prisma (PostgreSQL)
   - Tambah model-model konten ke `prisma/schema.prisma` (tetap pertahankan `User`). Rekomendasi struktur minimal namun fleksibel:
     - `Profile` (satu record per locale) + `SocialLink` (1-N)
     - `PageContent` untuk page-level konten sederhana (Home/About/Resume) per locale, atau dipisah per page:
       - Opsi A (disarankan): tabel spesifik per page untuk menghindari JSON berlebihan: `HomeContent`, `AboutContent`, `ResumeContent`.
       - Opsi B: satu tabel `Page` + `PageTranslation` + `content Json` (lebih generik, tapi rawan “fat JSON”).
     - `TechStackCategory` (per locale, berisi `title`, `items` sebagai string[]/Json, `order`, dan `iconKey` terbatas)
     - `Project` (canonical: `slug`, `imageUrl`, `demoUrl`, `role`, `tech` string[], `published` bool, `sortOrder`, timestamps)
       - `ProjectTranslation` (per locale: `title`, `category`, `intro`, `context`, `solution`, `impact` + arrays `highlights/challenges/contributions/impacts` sebagai Json)
     - `Credential` (canonical: `slug/id`, `type` enum, `issuer`, `year`, `imageUrl`, `published`, `sortOrder`)
       - `CredentialTranslation` (per locale: `title`, `description`, `skills` Json/string[])
   - Tambahkan enum untuk `Locale` (mis. `id`, `en`) dan `CredentialType` (`Sertifikasi`, `Pelatihan`).
   - Pertimbangan SRP/Clean Code: pisahkan “canonical” vs “translation” agar field yang tidak perlu dilokalkan tidak diduplikasi.

3. Migrasi database (Prisma migrate) + seed data awal
   - Buat migration baru: `pnpm prisma migrate dev --name add_cms_content_models`.
   - Tambahkan seed script yang saat ini belum ada (terreferensi di `prisma.config.ts`): buat `prisma/seed.js`.
     - Seed admin user pertama (gunakan `bcryptjs` untuk `passwordHash`).
     - Seed konten dari `src/data/*` dan dari teks hardcoded di About/Resume.
     - Pastikan seed idempotent (upsert by `slug`/unique key).

4. Layer akses data (Repository) untuk konten publik
   - Buat modul server-only (mis. `src/lib/content/`) yang menyediakan fungsi read:
     - `getPublicProfile(locale)`
     - `getHomeContent(locale)`
     - `getAboutContent(locale)` termasuk `techStack` + credentials list
     - `listProjects(locale)` dan `getProjectBySlug(slug, locale)`
     - `listCredentials(type, locale)` dan `getCredentialBySlug(slug, locale)`
     - `getResumeContent(locale)`
   - Terapkan caching untuk ISR:
     - Set `export const revalidate = <seconds>` di page yang cocok, atau gunakan `unstable_cache` + tag (mis. `content:profile:id`).
     - Definisikan strategi invalidasi (lihat Step 7).

5. Refactor public pages: ganti hardcoded data → DB
   - Update page server components:
     - Home: `src/app/(public)/page.js`
     - About: `src/app/(public)/about/page.js`
     - Projects list: `src/app/(public)/projects/page.js`
     - Project detail: `src/app/(public)/projects/[id]/page.js` (rename param ke `[slug]` jika mau lebih semantik; kalau tidak, tetap `[id]` tapi treat as slug)
     - Certificates detail: `src/app/(public)/certificates/[id]/page.js`
     - Resume: `src/app/(public)/resume/page.js`
   - Refactor layout + client shell supaya profile dinamis:
     - `src/app/(public)/layout.js` fetch profile (server) lalu pass ke `PublicShell` sebagai props.
     - Ubah `src/components/public/PublicShell.js`, `Sidebar.js`, `MobileHeader.js` agar menerima `profile` via props (hapus import langsung dari `src/data/profile`).
   - Pastikan metadata generator (`generateMetadata`) mengambil data dari DB (dan handle notFound).
   - ISR: hilangkan ketergantungan `generateStaticParams` pada array lokal; ganti ke DB query bila tetap ingin prebuild subset. Pastikan “project baru” tetap bisa diakses tanpa rebuild.

6. Bangun Internal CMS (Admin UI) di route group `(admin)`
   - Struktur minimal:
     - `/admin` dashboard
     - `/admin/profile` edit profile per locale + socials
     - `/admin/home` edit heading/subheading/tagline/focus
     - `/admin/about` edit paragraphs + tech stack categories + credential entries
     - `/admin/projects` list + create/edit project + translation per locale
     - `/admin/resume` set resume PDF URL
   - Implementasi write path:
     - Prefer Server Actions untuk form submit (lebih sederhana daripada API CRUD), tetap validasi input pakai `zod`.
     - Untuk list/create/edit yang kompleks, boleh kombinasikan server actions + komponen client ringan.
   - Konsistensi UI: gunakan Tailwind tokens yang sudah ada; jangan introduce tema/warna baru.

7. AuthN/AuthZ untuk CMS (NextAuth + role admin)
   - Buat route NextAuth App Router: `src/app/api/auth/[...nextauth]/route.js`.
     - Provider: Credentials (username + password).
     - Validasi password dengan `bcryptjs` membandingkan dengan `User.passwordHash`.
     - Simpan `role` ke session/JWT.
   - Buat halaman login: `src/app/(auth)/login/page.js`.
   - Proteksi admin routes:
     - Gunakan `getServerSession` di layout admin untuk redirect ke `/login` jika tidak auth.
     - Cek `session.user.role === 'admin'`.
   - Setelah write/update konten, lakukan invalidasi cache:
     - Gunakan `revalidatePath` (mis. `/`, `/about`, `/projects`, dst) atau `revalidateTag` per resource.

8. De-hardcode & cleanup bertahap
   - Setelah public pages sudah DB-driven dan seed berjalan:
     - `src/data/*` menjadi legacy: bisa dipertahankan sementara sebagai fallback, lalu dihapus setelah stabil.
     - Update dokumentasi singkat di README tentang setup DB + seed.

**Relevant files**
- `prisma/schema.prisma` — tambah model konten + enum locale/type
- `prisma.config.ts` — seed sudah mengarah ke `prisma/seed.js` (buat filenya)
- `src/lib/prisma.js` — tetap dipakai sebagai singleton
- `src/app/(public)/layout.js` — fetch profile + pass props
- `src/components/public/PublicShell.js`, `Sidebar.js`, `MobileHeader.js` — terima profile via props
- `src/app/(public)/page.js` — Home DB-driven
- `src/app/(public)/about/page.js` — About DB-driven (paragraphs/tech stack/credentials)
- `src/app/(public)/projects/page.js` dan `src/app/(public)/projects/[id]/page.js` — Projects DB-driven
- `src/app/(public)/certificates/[id]/page.js` — Credentials DB-driven
- `src/app/(public)/resume/page.js` — Resume DB-driven
- `src/app/(admin)/admin/*` — admin pages (baru)
- `src/app/(auth)/login/page.js` — login (baru)
- `src/app/api/auth/[...nextauth]/route.js` — NextAuth config (baru)
- `src/lib/content/*` — repository/read layer + cache tags (baru)
- `src/lib/auth/*` — helper session/role check (baru)

**Verification**
1. Database & Prisma
   - `pnpm prisma migrate dev`
   - `pnpm seed` (atau `pnpm prisma db seed`) memastikan seed idempotent
   - `pnpm prisma studio` cek record terbuat dan relasi benar
2. Public pages
   - `pnpm dev` lalu cek: `/`, `/about`, `/projects`, `/projects/<slug>`, `/resume`, `/certificates/<slug>`
   - Pastikan `Sidebar/MobileHeader` menampilkan profile dari DB
3. Admin CMS
   - Login sebagai admin
   - Edit 1 field (mis. tagline) → save → pastikan halaman public berubah setelah revalidate
4. Security checks (minimum)
   - Akses `/admin` tanpa login harus redirect ke `/login`
   - User role `user` tidak bisa akses admin

**Decisions**
- CMS: internal admin panel (bukan headless eksternal).
- Locale: simpan konten ID+EN di DB; pemilihan locale bisa default `id` dulu, dengan plumbing untuk `en` (tanpa menambah UI toggle jika tidak diminta).
- Rendering: ISR (revalidate) sebagai default.

**Further Considerations**
1. Locale selection strategy (rekomendasi minimal)
   - Opsi A: default `id` saja untuk public, EN hanya via admin preview.
   - Opsi B: pilih locale via query `?lang=en` (tanpa menambah UI).
   - Opsi C: full i18n routing (lebih besar scope).
2. Media management
   - Rekomendasi awal: simpan `imageUrl`/`resumeUrl` sebagai string URL; upload ke storage belakangan.
