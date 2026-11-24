================================================================================
PAKET DEPLOYMENT WEBSITE IS-SITEPA 2026 KE VIRTUAL MACHINE (VM)
Universitas Hasanuddin (FT UNHAS) x Universiti Teknologi Malaysia (UTM)
================================================================================

Halo! Folder ini berisi seluruh file dan panduan lengkap untuk menayangkan
website konferensi internasional IS-SITEPA 2026 di server Virtual Machine (VM).

Untuk panduan bergambar yang lebih detail, silakan buka file PDF:
--> PANDUAN_DEPLOY_IS_SITEPA_UNHAS_VM.pdf

--------------------------------------------------------------------------------
ISI FOLDER INI:
--------------------------------------------------------------------------------
1. [web_files/]   : Folder berisi seluruh file website yang siap tayang
                    (index.html, CSS, JS, logo UNHAS/UTM/IS-SITEPA, foto pembicara).
2. is-sitepa.conf : File konfigurasi Web Server Nginx siap pakai.
3. README_BACA_INI.txt : File ringkasan ini.
4. PANDUAN_DEPLOY_IS_SITEPA_UNHAS_VM.pdf : Panduan teknis lengkap berformat PDF.

--------------------------------------------------------------------------------
RINGKASAN CEPAT CARA UPLOAD KE VM (HANYA 3 LANGKAH):
--------------------------------------------------------------------------------

LANGKAH 1: UPLOAD FILE WEB KE SERVER
- Hubungkan laptop Anda ke VM menggunakan WinSCP atau FileZilla (SFTP).
- Buat folder di server: /var/www/is-sitepa
- Upload seluruh isi di dalam folder "web_files/" ke dalam "/var/www/is-sitepa/".

LANGKAH 2: ATUR PERMISSION & PASANG CONFIG NGINX
Jalankan perintah berikut di terminal SSH server:
1. Atur hak akses:
   sudo chown -R www-data:www-data /var/www/is-sitepa
   sudo chmod -R 755 /var/www/is-sitepa

2. Salin file konfigurasi Nginx:
   sudo cp is-sitepa.conf /etc/nginx/sites-available/is-sitepa
   (Atau buat manual lalu tempel isi is-sitepa.conf)

3. Aktifkan konfigurasi di Nginx:
   sudo ln -s /etc/nginx/sites-available/is-sitepa /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx

LANGKAH 3: PASANG SSL HTTPS (JIKA DOMAIN SUDAH AKTIF)
Jalankan:
   sudo apt install certbot python3-certbot-nginx -y
   sudo certbot --nginx -d is-sitepa.unhas.ac.id

Selesai! Website sudah langsung online dan dapat diakses publik.
================================================================================
