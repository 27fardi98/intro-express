# Setup Supabase Connection

## Langkah-langkah Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Buat File .env

Buat file `.env` di root project dengan isi:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

### 3. Dapatkan Supabase Credentials

1. Buka [Supabase Dashboard](https://app.supabase.com)
2. Pilih project Anda
3. Pergi ke **Settings** (ikon gear di sidebar kiri)
4. Klik **API** di menu Settings
5. Copy:
   - **Project URL** → masukkan ke `SUPABASE_URL`
   - **anon public** key → masukkan ke `SUPABASE_ANON_KEY`

### 4. Setup Database

1. Di Supabase Dashboard, buka **SQL Editor**
2. Buka file `database/init.sql` di project Anda
3. Copy semua isi file tersebut
4. Paste ke SQL Editor di Supabase
5. Klik **Run** atau tekan `Ctrl+Enter`

### 5. Jalankan Aplikasi

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Verifikasi Koneksi

Setelah setup selesai, coba akses:
- `http://localhost:3000` - Home endpoint
- `http://localhost:3000/api/users` - List users
- `http://localhost:3000/api/products` - List products

Jika berhasil, berarti koneksi ke Supabase sudah berjalan dengan baik! 🎉

## Troubleshooting

### Error: Missing Supabase environment variables
- Pastikan file `.env` sudah dibuat
- Pastikan nama variable sesuai: `SUPABASE_URL` dan `SUPABASE_ANON_KEY`
- Restart server setelah membuat/update file `.env`

### Error: relation "users" does not exist
- Pastikan sudah menjalankan script SQL di `database/init.sql`
- Cek di Supabase Dashboard > Table Editor apakah tabel sudah dibuat

### Error: Invalid API key
- Pastikan menggunakan **anon public** key, bukan service_role key
- Pastikan key sudah di-copy dengan benar (tidak ada spasi di awal/akhir)
