# Pembuatan Komponen UI Bagian Kedua: About Section & Tech Stack Section

**Tujuan:** Mengimplementasikan dua seksi baru pada halaman portfolio `DIMAS.DEV` yaitu "About Section" dan "Tech Stack Section", dengan tetap mematuhi filosofi desain minimalis "Ma" (negative space).

---

## 1. About Section (Asymmetrical Layout)

Seksi ini akan menggunakan layout asimetris dengan ruang kosong (*negative space*) yang dominan dan animasi scroll yang halus.

### Detail Kebutuhan:
- **Lokasi File:** Buat file komponen baru di `src/components/ui/About.tsx`.
- **Layout Dasar:** 
  - Gunakan grid 12 kolom (misalnya: `grid grid-cols-1 md:grid-cols-12`).
  - Berikan padding vertikal masif (minimal `py-32` atau `py-48` pada kontainer utama).
- **Sisi Kiri (Kolom 1-5) - "Pixelated Canvas":**
  - Buat komponen visual interaktif abstrak.
  - Tampilan berupa grid kotak-kotak kecil yang padat (dirangkai sedemikian rupa menjadi canvas).
  - **Logic Interaksi Hover (Explicit):**
    - Render grid menggunakan *array mapping* (misal 100 elemen kotak).
    - Tiap `div` kotak bisa mengandalkan CSS statis dengan state lokal atau lebih mudah menggunakan efek transisi CSS `hover`: ubah warna `bg` sesaat saat kursor menyentuh (`onMouseEnter` atau pseudo-class `:hover`) dan gunakan `transition-duration` yang agak lambat untuk kembali ke warna semula (efek *trailing/fading*).
    - Styling wajib: Latar belakang gelap (`#141414`), border sangat tipis (`#292929`), dan efek nyala dengan aksen *subtle* transparan.
- **Sisi Kanan (Kolom 7-12) - Konten Teks:**
  - **Metadata Tag:** `01 / ABOUT` (Font: JetBrains Mono / `font-mono`, ukuran: `text-xs`, warna abu-abu/sekunder).
  - **Heading:** `I design and build digital experiences that feel simple.` (Font: Space Grotesk / `font-sans`, ukuran dominan misal `text-4xl`, warna primer `#F2F0EA`).
  - **Paragraf:** `Currently studying Information and Computer Technology (D4) at Politeknik Negeri Subang. I focus on bridging the gap between elegant engineering and beautiful user interfaces. My philosophy leans heavily into deliberate subtraction; stripping away unnecessary decoration until only purposeful interaction and clarity remain.` (Font: Inter / `font-body`, warna sekunder `#A3A09A`).

### Animasi Scroll (Framer Motion):
- Seluruh teks (Metadata, Heading, Paragraf) harus muncul secara bertahap (*staggered fade-in*) dan menggeser posisinya dari `y: 20` ke `y: 0` **hanya ketika** area tersebut masuk ke dalam layar (*viewport*).
- **Exact Props (whileInView) untuk Elemen Teks:**
  ```tsx
  import { motion } from "framer-motion";

  // Bungkus elemen dengan motion.div:
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease-out curve
  >
    {/* Konten */}
  </motion.div>
  ```
- **Aturan Ketat:** Dilarang keras menggunakan animasi memantul (*bouncy* / `spring`). Gunakan selalu bezier curve lambat yang terlihat elegan (`ease: [0.16, 1, 0.3, 1]`).

---

## 2. Tech Stack Section

Seksi ini menampilkan keahlian teknologi secara *infinite loop* horizontal.

### Detail Kebutuhan:
- **Lokasi File:** Buat file komponen baru di `src/components/ui/TechStack.tsx`.
- **Header Seksi:** `02 / TECHNOLOGIES I WORK WITH` (Font: JetBrains Mono / `font-mono`, ukuran: `text-xs`).
- **Komponen Utama (Marquee):**
  - Implementasikan menggunakan atau terinspirasi dari komponen UI Aceternity **"Infinite Moving Cards"**.
  - Daftar Teknologi: `"REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "FIGMA", "GIT"`.
- **Styling Item (Editorial Tag):**
  - **Panduan Ketat Integrasi:** Buang semua kode *box-shadow*, *drop-shadow*, atau *background gradient* kompleks yang sering menjadi default di UI libraries.
  - Kartu harus dirender mendatar (flat style).
  - Latar belakang sangat gelap (`#141414`), border sangat tipis (`#292929`), font JetBrains Mono, warna teks sekunder, tanpa shadow sama sekali.

---

## Langkah-langkah Eksekusi (Untuk Diikuti Junior Programmer / AI Assistant)

1. **Pembuatan Struktur File:**
   - Buat `src/components/ui/About.tsx`.
   - Buat `src/components/ui/TechStack.tsx`.
   - Impor dan letakkan kedua komponen ini di halaman utama (misal `src/app/page.tsx`), persis di bawah komponen Hero (atau preloader).

2. **Implementasi `About.tsx`:**
   - Gunakan `className="grid grid-cols-1 md:grid-cols-12 gap-8 py-32"` sebagai kontainer utama.
   - **Bagian Kiri:** Bangun komponen "Pixelated Canvas". Bikin `div` yang menampilkan `grid` atau `flex-wrap` berisikan `div` kecil-kecil dengan styling base: `w-6 h-6 border border-[#292929] bg-[#141414]`. Sisipkan class `hover:bg-[warna-nyala] transition-colors duration-500 hover:duration-0`.
   - **Bagian Kanan:** Susun Metadata, Heading, dan Paragraf. Bungkus masing-masing elemen dengan `<motion.div>` yang menyematkan *exact framer-motion props* yang disediakan di atas. Untuk efek berurutan (*stagger*), bisa dengan menambahkan delay bertingkat pada transition (misal `delay: 0`, `delay: 0.1`, `delay: 0.2`).

3. **Implementasi `TechStack.tsx`:**
   - Persiapkan struktur infinite marquee UI (atau install library Aceternity-nya).
   - Pastikan styling kartu menyesuaikan arahan *Editorial Tag* (batas tipis & flat).
   - Letakkan Header seksinya dengan margin yang estetik sebelum teks berjalan.

4. **Finishing Touch:**
   - Cek silang seluruh desain di browser (termasuk perilaku di mode mobile/layar kecil).
   - Hindari ornamen tidak perlu; patuhi panduan estetika minimalisme "Ma".

---

## Status Pengerjaan (Definition of Done)
- [x] Komponen `src/components/ui/About.tsx` dibuat dengan layout asimetris 12-kolom dan padding vertikal masif (`py-32 md:py-48`).
- [x] Komponen "Pixelated Canvas" interaktif pada kolom 1-5 dengan grid kotak bernuansa gelap `#141414`, border tipis `#292929`, dan hover illumination trailing halus.
- [x] Konten teks About pada kolom 7-12 (Metadata `01 / ABOUT`, Heading `I design and build digital experiences that feel simple.`, dan Paragraf deskripsi).
- [x] Animasi scroll `whileInView` framer-motion yang halus dan elegan tanpa efek bouncy (`ease: [0.16, 1, 0.3, 1]`).
- [x] Komponen `src/components/ui/TechStack.tsx` dibuat dengan Header `02 / TECHNOLOGIES I WORK WITH`.
- [x] Aceternity Infinite Moving Cards (Marquee) scroll horizontal tanpa batas untuk item `REACT`, `NEXT.JS`, `TYPESCRIPT`, `TAILWIND CSS`, `FIGMA`, `GIT`.
- [x] Item teknologi dirender flat editorial tag dengan background `#141414`, border `#292929`, font JetBrains Mono, tanpa shadow.
- [x] Komponen diintegrasikan ke `src/app/page.tsx` di bawah Hero.
- [x] Linting & build Next.js lulus 100% tanpa error.

