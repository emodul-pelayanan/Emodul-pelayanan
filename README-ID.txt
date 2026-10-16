PWA E-MODUL CTL — PETUNJUK PENERBITAN GRATIS

Isi folder:
- index.html: halaman pembuka e-modul
- manifest.json: nama, warna, dan identitas PWA
- sw.js: cache aplikasi dan PDF untuk akses offline
- modul.pdf: salinan teroptimasi dari PDF yang dikirim
- icon-192.png, icon-512.png, apple-touch-icon.png: ikon aplikasi

CATATAN PDF:
PDF asli berukuran sekitar 163 MB. Salinan modul.pdf di paket ini berukuran sekitar 40 MB agar lebih praktis dihosting dan disimpan di HP. Pemeriksaan teknis menunjukkan 62 halaman dan 125 tautan PDF (108 navigasi internal dan 17 tautan eksternal) tetap ada setelah optimasi. Tetap bandingkan tampilan beberapa halaman dan uji tautan penting sebelum digunakan pada penelitian.

PENERBITAN MELALUI GITHUB PAGES:
1. Ekstrak ZIP ini.
2. Buat repositori PUBLIC baru di https://github.com/ (misalnya emodul-ctl).
3. Unggah semua isi folder ini ke root repositori, bukan folder luarnya.
4. Buka Settings > Pages.
5. Pada Build and deployment, pilih Deploy from a branch, branch main, folder /(root), lalu Save.
6. Tunggu URL Pages aktif. Bentuk URL: https://USERNAME.github.io/emodul-ctl/.
7. Buka URL tersebut melalui HTTPS di Android/Chrome dan iPhone/Safari.
8. Buka sekali saat online, lalu tekan “Simpan Materi untuk Offline” dan tunggu sampai berhasil.
9. Uji mode pesawat: buka ulang halaman PWA dan PDF. Tautan video dan situs latihan online tetap membutuhkan internet.

PENTING:
- Jangan membuka index.html langsung dari aplikasi Files; service worker memerlukan situs HTTPS/localhost.
- PDF sekitar 40 MB. Penyimpanan offline bergantung pada ruang penyimpanan dan kebijakan cache browser/perangkat.
- Jika PDF diperbarui, naikkan versi CACHE_NAME pada sw.js (misalnya emodul-ctl-v2) lalu terbitkan ulang.
- PWA ini adalah prototipe awal. Lakukan uji di perangkat Android dan iPhone sebelum digunakan oleh siswa.
