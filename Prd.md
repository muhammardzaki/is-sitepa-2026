# Technical PRD: IS-SITEPA Conference Website (Stitch-to-Production)

## 1. Context & Objective
Proyek ini adalah website resmi konferensi internasional **IS-SITEPA** (*International Symposium on Sustainable Infrastructure, Transportation, Environment, Planning, and Architecture*), kolaborasi **FT UNHAS** dan **FKA & FABU UTM**.

Di dalam workspace ini sudah terdapat file hasil ekspor desain dari **Google Stitch** (hasil ekstrak ZIP). Tugas utama agent adalah mengonversi desain statis tersebut menjadi aplikasi web yang **modular, responsif, interaktif, cepat, dan siap deploy** (static build) dengan tetap mempertahankan identitas visual dari desain Stitch.

---

## 2. Visual & Brand Constraints (Strict Preservation)
Pertahankan sistem warna dari desain Stitch dan logo IS-SITEPA sebagai CSS Variables / Theme Tokens:
- **Primary Gradient:** `linear-gradient(135deg, #8B131E 0%, #560911 55%, #2D0408 100%)` (Hero, table headers, CTA banners, footer).
- **Primary Crimson:** `#8B131E` (Hover: `#6E0D16`).
- **Secondary Blue:** `#0A4D7C` & Highlight `#008FD5` (Sub-headings, links, category accents).
- **Eco Green:** `#4E8C2A` (Active status badges, sustainability accents).
- **Navbar:** Wajib berlatar putih bersih (`#FFFFFF`) dengan *sticky behavior* agar logo IS-SITEPA tetap kontras dan tajam.
- **Typography:** `Plus Jakarta Sans` (Heading) & `Inter` (Body). Pastikan dimuat dengan benar (Google Fonts / local).

---

## 3. Recommended Tech Stack & Architecture
Gunakan stack yang ringan dan menghasilkan **static build (`dist/`)** agar mudah di-deploy ke server kampus (cPanel/Nginx/Apache) maupun Netlify/Vercel/Cloudflare Pages tanpa butuh backend Node.js yang selalu menyala:
- **Framework:** Vite + Vanilla JS/TypeScript (atau React + Vite + Tailwind CSS jika desain Stitch menggunakan kelas Tailwind).
- **Data Separation (Wajib):** Pisahkan seluruh konten dinamis dari markup UI ke dalam folder `src/data/` (format JSON atau JS module) agar panitia bisa memperbarui jadwal, pembicara, biaya, atau tautan formulir tanpa menyentuh kode komponen:
  - `src/data/siteConfig.js` (Judul, tanggal target countdown, lokasi, email, link tombol Register/Submit Paper/Download Template).
  - `src/data/topics.js` (5 track utama: Sustainable Infrastructure, Transportation, Environment, Planning, Architecture).
  - `src/data/speakers.js` (Nama, gelar, afiliasi, foto, topik, dan bio lengkap).
  - `src/data/dates.js` (Daftar *Important Dates* beserta status: `past`, `active`, `upcoming`).
  - `src/data/fees.js` (Kategori peserta, biaya Early Bird & Regular, detail pembayaran).
  - `src/data/committee.js` (Data terpisah untuk *Steering*, *Organizing*, dan *Scientific Committee*).

---

## 4. Functional Requirements (Interactivity)
Semua elemen UI dari Stitch yang masih statis wajib dibuat fungsional:

1. **Responsive Navigation & Scroll-Spy**
   - Sticky navbar dengan transisi shadow halus saat di-scroll.
   - Highlight otomatis pada menu navigasi sesuai section yang sedang dilihat (*IntersectionObserver*).
   - Mobile hamburger menu / drawer yang berfungsi mulus di layar `< 1024px` dan otomatis menutup saat link diklik.
   - Smooth scrolling dengan offset yang pas agar judul section tidak tertutup sticky navbar.

2. **Live Countdown Timer (Hero Section)**
   - Membaca target tanggal & zona waktu (WITA / UTC+8) dari `siteConfig.js`.
   - Update setiap detik (`Days`, `Hours`, `Minutes`, `Seconds`).
   - Tangani *edge case*: jika waktu sudah habis, tampilkan pesan status (misal: *"The Symposium is Now Live!"*).

3. **Keynote Speakers Bio Modal**
   - Klik tombol **"View Bio"** pada kartu pembicara membuka modal/dialog yang menampilkan foto, afiliasi, topik, dan biografi lengkap dari `speakers.js`.
   - Modal wajib bisa ditutup via tombol `X`, klik area luar (*backdrop*), dan tombol keyboard `Escape`.

4. **Dynamic Important Dates Status**
   - Render timeline dari `dates.js`.
   - Berikan styling otomatis berdasarkan status: `past` (muted/strikethrough halus), `active` (border/highlight `#8B131E` + badge hijau `#4E8C2A`), `upcoming` (netral).

5. **Interactive Committee Tabs**
   - Tab switching untuk `Steering Committee`, `Organizing Committee`, dan `Scientific Committee` tanpa reload halaman, lengkap dengan state `aria-selected`.

6. **External Links & Asset Downloads**
   - Semua tombol CTA (*Register Now*, *Submit Paper*, *Download Template*, *Brochure*) terhubung terpusat ke `siteConfig.js`. Jika link masih placeholder, arahkan dengan jelas ke konstanta `#` disertai komentar `// TODO: Update URL`.

7. **Venue Map & Contact**
   - Embed Google Maps responsif (aspect ratio terjaga di mobile & desktop) + tombol cepat salin alamat/email atau buka WhatsApp/email sekretariat.

---

## 5. Non-Functional Requirements
- **Responsiveness:** Uji dan pastikan tidak ada *horizontal overflow* pada viewport Mobile (375px), Tablet (768px), dan Desktop (1440px). Tabel *Registration Fees* wajib *horizontally scrollable* atau berubah menjadi layout kartu di layar kecil.
- **Asset Management:** Pindahkan semua aset gambar dan logo IS-SITEPA ke `public/assets/images/`. Pastikan tidak ada URL gambar eksternal yang mati (*broken links*).
- **SEO & Social Sharing:** Lengkapi `<head>` dengan meta description, favicon dari logo IS-SITEPA, serta Open Graph (`og:title`, `og:description`, `og:image`) agar link website tampil rapi saat dibagikan di WhatsApp/LinkedIn.
- **Performance & Accessibility:** Gunakan semantic HTML5, `loading="lazy"` untuk gambar di bawah *fold*, atribut `alt` yang deskriptif, dan pastikan kontras teks putih di atas gradien merah memenuhi standar WCAG AA.

---

## 6. Agent Execution Workflow
Ikuti tahapan ini secara berurutan sebelum menulis kode final:
1. **Audit Workspace:** Inspeksi seluruh file hasil ekstrak ZIP Google Stitch yang ada di direktori saat ini. Identifikasi aset, struktur CSS, dan elemen yang perlu diperbaiki.
2. **Propose Plan:** Tampilkan ringkasan struktur folder yang akan dibuat dan konfirmasi stack (Vite + Tailwind / Vanilla) sebelum melakukan refactor.
3. **Refactor & Modularize:** Bangun struktur proyek, pindahkan teks ke `src/data/`, dan terapkan CSS tokens warna IS-SITEPA.
4. **Implement Interactivity:** Aktifkan countdown, modal speaker, tab komite, mobile drawer, dan scroll-spy.
5. **Verify:** Jalankan dev server / build (`npm run build`), pastikan tidak ada error di console, tidak ada broken image, dan layout aman di desktop maupun mobile.