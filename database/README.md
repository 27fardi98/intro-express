# Database Setup untuk Supabase

## Cara Menggunakan

1. Buka Supabase Dashboard
2. Pilih project Anda
3. Pergi ke **SQL Editor**
4. Copy semua isi dari file `init.sql`
5. Paste ke SQL Editor
6. Klik **Run** atau tekan `Ctrl+Enter`

## Struktur Tabel

### 1. Users
- `id` - Primary Key (Auto Increment)
- `name` - Nama user (VARCHAR 255)
- `email` - Email user (Unique, VARCHAR 255)
- `age` - Umur user (INTEGER)
- `created_at` - Timestamp pembuatan (Auto)
- `updated_at` - Timestamp update (Auto)

### 2. Products
- `id` - Primary Key (Auto Increment)
- `name` - Nama produk (VARCHAR 255)
- `price` - Harga produk (BIGINT, >= 0)
- `stock` - Stok produk (INTEGER, >= 0)
- `created_at` - Timestamp pembuatan (Auto)
- `updated_at` - Timestamp update (Auto)

### 3. Messages
- `id` - Primary Key (Auto Increment)
- `text` - Isi pesan (TEXT)
- `timestamp` - Timestamp pesan (TIMESTAMP)
- `created_at` - Timestamp pembuatan (Auto)
- `updated_at` - Timestamp update (Auto)

## Fitur

- ✅ Auto-increment ID
- ✅ Auto-update `updated_at` timestamp
- ✅ Index untuk performa query
- ✅ Constraints untuk validasi data
- ✅ Initial data seeding (optional)

## Catatan

- Script ini menggunakan `IF NOT EXISTS` sehingga aman dijalankan berulang kali
- Initial data menggunakan `ON CONFLICT DO NOTHING` untuk menghindari duplikasi
- Semua timestamp menggunakan `TIMESTAMP WITH TIME ZONE` untuk konsistensi
