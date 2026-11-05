# Ruang Vinyl

Website listening room dengan intro cinematic, turntable animasi, rak vinyl interaktif, dan 34 album / 425 lagu melalui pemutar YouTube yang terlihat. Dibuat dengan HTML, CSS, dan JavaScript tanpa build atau server aplikasi.

## Publikasi gratis ke GitHub Pages

1. Buat repositori **public** bernama `ruangvinyl` pada akun GitHub Free.
2. Unggah seluruh isi folder ini ke root repositori. `index.html` harus berada di root, bukan di folder tambahan. Sertakan folder `assets` beserta isinya dan file `.nojekyll`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch **main**, folder **/(root)**, kemudian **Save**.
6. Tunggu sampai GitHub Pages menampilkan URL dan deployment berhasil. Alamat proyek biasanya `https://USERNAME.github.io/ruangvinyl/`.

Tidak diperlukan custom domain, paket npm, API key YouTube, atau proses build. Semua alamat aset memakai path relatif agar bekerja di subfolder GitHub Pages.

## Pemutaran

Gunakan alamat HTTPS hasil publikasi, bukan membuka `index.html` melalui `file://`: pemutar YouTube membutuhkan identitas origin/referrer dari halaman website.

Video tetap terlihat saat diputar. Pemutaran dijeda ketika berpindah ke library, video keluar dari area tampilan, atau tab tidak aktif. Pemilik video dan YouTube dapat membatasi pemutaran embed, wilayah, atau ketersediaan; tautan ke YouTube disediakan saat diperlukan. Beberapa browser mengharuskan klik play langsung pada video.

Impor file audio bersifat lokal dan hanya berlaku selama halaman terbuka; file tidak diunggah ke server.

## Isi proyek

- `index.html`: struktur halaman.
- `app.js`: library, navigasi, daftar lagu, serta kontrol player.
- `youtube.js`: integrasi resmi YouTube IFrame Player API.
- `catalog.js`: metadata album dan video.
- `intro.js`, `intro.css`, `assets/intro-forest.png`: halaman pembuka.
- `style.css`, `rooms.css`, `youtube.css`: tampilan responsif.

Metadata, sampul album, dan video tetap milik pemegang hak masing-masing. Repositori ini tidak menyimpan file lagu YouTube atau memberikan hak redistribusi terhadap musik tersebut.
