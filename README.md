# Fresh Fruit Store

Ini adalah proyek Fresh Fruit Store yang dibangun menggunakan React dan Vite. Proyek ini menyediakan pengaturan minimal untuk menjalankan React dengan Vite, HMR, dan beberapa aturan ESLint.

## Fitur

- Animasi menggunakan Framer Motion
- Ikon menggunakan React Icons
- Gaya menggunakan Tailwind CSS
- Struktur komponen yang terorganisir

## Plugin Resmi yang Tersedia

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) menggunakan [Babel](https://babeljs.io/) untuk Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) menggunakan [SWC](https://swc.rs/) untuk Fast Refresh

## Struktur Proyek

Berikut adalah struktur direktori utama dari proyek ini:

- `src/`
  - `components/`
    - `Banners/`
      - `Banner.jsx`
      - `Banner2.jsx`
      - `Banner3.jsx`
    - `Footer/`
      - `Footer.jsx`
    - `Hero/`
      - `Hero.jsx`
    - `Menus/`
      - `Menus.jsx`
    - `Navbar/`
      - `Navbar.jsx`
      - `ResponsiveMenu.jsx`
  - `constant/`
    - `index.js`
  - `utility/`
    - `animation.jsx`
  - `index.css`
  - `main.jsx`
  - `App.jsx`

## Cara Menjalankan Proyek

1. Clone repositori ini.
2. Jalankan `npm install` untuk menginstal semua dependensi.
3. Jalankan `npm run dev` untuk memulai server pengembangan.
4. Buka `http://localhost:3000` di browser Anda untuk melihat aplikasi.

## Skrip yang Tersedia

- `dev`: Menjalankan server pengembangan Vite.
- `build`: Membangun proyek untuk produksi.
- `lint`: Menjalankan ESLint untuk memeriksa kesalahan kode.
- `preview`: Melihat pratinjau build produksi.

## Dependensi

Proyek ini menggunakan beberapa dependensi utama seperti:

- `react`
- `react-dom`
- `framer-motion`
- `react-icons`
- `tailwindcss`

Untuk daftar lengkap dependensi, lihat file `package.json`.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau buka issue di repositori ini.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.