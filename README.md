# Intro Express API

Express.js API dengan struktur MVC/MVP dan integrasi Supabase.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Buat file `.env` di root project (copy dari `.env.example`):

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

**Cara mendapatkan Supabase credentials:**
1. Buka Supabase Dashboard
2. Pilih project Anda
3. Pergi ke **Settings** > **API**
4. Copy **Project URL** dan **anon public** key

### 3. Setup Database

1. Buka Supabase Dashboard > **SQL Editor**
2. Copy semua isi dari `database/init.sql`
3. Paste dan jalankan di SQL Editor

### 4. Run Application

```bash
# Development mode (dengan nodemon)
npm run dev

# Production mode
npm start
```

Server akan berjalan di `http://localhost:3000`

## API Endpoints

### Home
- `GET /` - Home dengan statistics

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

## Struktur Project

```
intro-express/
├── config/
│   └── supabase.js          # Supabase client configuration
├── controllers/             # Business logic handlers
├── data/                     # Dummy JSON data (backup)
├── database/                 # SQL scripts
├── middleware/               # Custom middleware
├── routes/                   # Route definitions
├── services/                 # Service layer (Supabase)
│   └── utils/
├── index.js                  # Entry point
└── package.json
```

## Tech Stack

- Express.js 5.x
- Supabase (PostgreSQL)
- ES6 Modules
