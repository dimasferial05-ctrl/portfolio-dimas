# Phase 2 (V2): Preloader Counter & Hero Section with Aceternity Ripple

**Project**: DIMAS.DEV — Interactive Developer Portfolio
**Target**: Mengimplementasikan komponen Preloader berbasis counter angka dan Hero Section yang menggunakan Aceternity Background Ripple Effect serta typography text flip animasi.

## Instruksi untuk Implementator
Ikuti langkah-langkah di bawah ini secara persis. Anggap ini adalah instruksi mutlak. **DILARANG** berimprovisasi dengan warna, jenis font, atau gaya animasi di luar panduan. Semua animasi framer-motion harus terasa lambat, presisi, dan elegan tanpa ada efek mantul (*bouncy*). Konsep utamanya adalah "Ma" (negative space).

### Step 1: Instalasi Dependensi & Persiapan Komponen
1. Pastikan `framer-motion` dan tool penunjang Tailwind (seperti `clsx`, `tailwind-merge`) sudah tersedia jika dibutuhkan untuk komponen Aceternity.
2. Buat file-file komponen berikut di dalam `src/components/ui/` (jika belum ada):
   - `preloader.tsx`
   - `hero.tsx`
   - `ripple.tsx` (Untuk komponen Background Ripple Effect).

### Step 2: Implementasi Background Ripple Effect (`src/components/ui/ripple.tsx`)
1. Salin kode komponen dasar dari [Aceternity Background Ripple Effect](https://ui.aceternity.com/components/background-ripple-effect).
2. **MODIFIKASI PENTING (SYARAT MUTLAK)**:
   - Sesuaikan *opacity* garis gelombang menjadi sangat tipis (maksimal 5% atau opacity `0.05`).
   - Gunakan warna garis putih/abu-abu transparan agar menyatu halus dengan background hitam murni (`#0C0C0C`).
   - Ubah konfigurasi animasi (seperti penambahan delay antar ripple atau durasi yang lebih panjang) agar pergerakannya **SANGAT LAMBAT**. Efek airnya tidak boleh agresif atau mengganggu keterbacaan (menjaga prinsip "Ma").

### Step 3: Implementasi Preloader (`src/components/ui/preloader.tsx`)

**Spesifikasi:**
- **Tampilan**: Layar penuh (`fixed inset-0 z-50 flex items-center justify-center`) dengan background gelap murni (`bg-[#0C0C0C]`). Tidak tembus klik (block pointer events).
- **Konten**: Angka persentase besar (misalnya `text-5xl md:text-7xl`) di tengah layar.
- **Tipografi**: Font monospace (`font-mono`) menggunakan JetBrains Mono, warna utama/putih atau abu-abu terang.
- **State Logic**: Gunakan `useState` dan `useEffect` untuk membuat logika counter (0-100%) dengan rentang waktu sekitar 1.5 - 2 detik.
- **Exit**: Setelah mencapai angka 100%, berikan jeda sedikit, lalu panggil callback `onComplete()` agar komponen hilang dengan transisi `fade-out`.

**Contoh Logic Counter:**
```tsx
const [counter, setCounter] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCounter((prev) => {
      if (prev >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 400); // Jeda sebelum fade-out agar 100% terbaca
        return 100;
      }
      return prev + Math.floor(Math.random() * 10) + 2; // Hitungan naik secara acak agar natural
    });
  }, 40);

  return () => clearInterval(interval);
}, [onComplete]);
```

### Step 4: Implementasi Komponen Hero (`src/components/ui/hero.tsx`)

**Layout:**
- Wrapper utama: `min-h-screen`, flex flex-col justify-center items-start, tata letak **rata kiri** (left-aligned) dengan padding lega (misal `px-8 md:px-24`).
- Tambahkan komponen `<Ripple />` di lapisan paling bawah container Hero (posisi absolut/relative dengan `z-index` yang lebih rendah dari konten teks).

**Daftar Teks yang Berotasi (Text Flip):**
Ganti bagian dalam kurung `I BUILD [ ... ]` menggunakan array berikut secara infinite loop (interval ~2500ms):
1. `"WEB APPLICATIONS"`
2. `"INTERACTIVE PRODUCTS"`
3. `"USER EXPERIENCES"`
4. `"IOT ECOSYSTEMS"`

**Exact Framer-Motion Variants (WAJIB DIPAKAI):**

*1. Text Flip Animasi (Untuk teks dalam `<AnimatePresence mode="wait">`):*
```typescript
const flipVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};
const flipTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };
```

*2. Entry Animasi / Staggered Delay untuk Elemen Konten Hero:*
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};
```
Berikan `variants={containerVariants}` dengan `initial="hidden"` dan `animate="visible"` pada elemen bungkus utamanya. Berikan `variants={itemVariants}` pada setiap anak elemen di bawah ini.

**Struktur Elemen Konten:**
1. **Status Badge:** Teks monospace ukuran kecil `[ STATUS: SYSTEM ONLINE ]` dengan sebuah titik bulat berwarna Vermilion (`#E63946`) yang diberi efek `animate-pulse`.
2. **Giant Heading:** Teks `DIMAS FERIAL HIDAYAT.` memakai font Space Grotesk (`font-sans`), berukuran raksasa (`text-5xl md:text-8xl lg:text-9xl`), dan berwarna utama.
3. **Animated Subheading:** Awalan teks `I BUILD ` diikuti komponen animasi teks (dari state text flip). Font memakai Space Grotesk.
4. **Body Text:** Teks `Software Developer · Frontend Enthusiast.` menggunakan font Inter (`font-body`) warna teks abu-abu (`#A3A09A`).
5. **Call to Action (CTA) Group:** Dua tombol diletakkan sejajar berdekatan (flex gap):
   - `[ VIEW MY WORK ]`
   - `[ DOWNLOAD CV ]`
   - *Style Tombol:* Minimalis, tanpa fill background (transparan), garis border sangat tipis 1px berwarna netral gelap (`#292929`), font monospace.
   - *Hover Efek:* Ketika disentuh/di-hover, warna border/garis bawah harus bertransisi halus menjadi warna Vermilion (`#E63946`) dengan durasi sekitar `300ms`.

### Step 5: Penggabungan di `src/app/page.tsx`
Bersihkan konten halaman dan pasang orkestrasi antara `<Preloader />` dan `<Hero />`. Render preloader jika state `isBooting` true, kemudian beralih ke `<Hero />` menggunakan `<AnimatePresence mode="wait">` agar transisi pergantian layar mulus.

---

## Kriteria Selesai (Definition of Done)
- [x] Preloader counter angka berjalan 0-100% dan langsung fade-out dengan mulus.
- [x] Background efek Ripple Aceternity terpasang dengan pergerakan SANGAT LAMBAT dan SANGAT SUBTLE (opacity <= 5%).
- [x] Animasi elemen konten Hero masuk dengan stagger delay arah vertikal lambat (*ease-out* presisi `[0.16, 1, 0.3, 1]`) dan *tanpa* ada pantulan.
- [x] Animasi rotasi Text Flip berputar 4 iterasi teks secara infinite tanpa henti.
- [x] CTA Group menampilkan 2 tombol sejajar, yang apabila di-hover memunculkan warna aksen merah Vermilion.
