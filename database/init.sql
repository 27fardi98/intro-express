-- ============================================
-- Supabase Database Initialization Script
-- ============================================

-- Enable UUID extension (optional, jika ingin menggunakan UUID)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Table: users
-- ============================================
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  age INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for email (for faster lookups)
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- ============================================
-- Table: products
-- ============================================
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price BIGINT NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for name (for faster searches)
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);

-- ============================================
-- Table: messages
-- ============================================
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- Function: Update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- Triggers: Auto-update updated_at
-- ============================================
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_messages_updated_at
  BEFORE UPDATE ON messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Insert Initial Data (Optional)
-- ============================================
INSERT INTO users (name, email, age) VALUES
  ('John Doe', 'john@example.com', 28),
  ('Jane Smith', 'jane@example.com', 25),
  ('Bob Johnson', 'bob@example.com', 32)
ON CONFLICT (email) DO NOTHING;

INSERT INTO products (name, price, stock) VALUES
  ('Laptop', 15000000, 10),
  ('Mouse', 150000, 50),
  ('Keyboard', 500000, 30)
ON CONFLICT DO NOTHING;

INSERT INTO messages (text, timestamp) VALUES
  ('Welcome to Express API!', '2024-01-01T00:00:00Z'::timestamp)
ON CONFLICT DO NOTHING;
