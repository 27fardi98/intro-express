# API Documentation

Dokumentasi lengkap untuk semua endpoint API.

## Base URL
```
http://localhost:3000
```

## Endpoints

### Home
- `GET /` - Home dengan statistics

### Users API

#### Get All Users
```http
GET /api/users
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 28,
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "status": "success",
  "count": 1
}
```

#### Get User by ID
```http
GET /api/users/:id
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 28,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  },
  "status": "success"
}
```

#### Create User
```http
POST /api/users
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 28
}
```

**Response (201):**
```json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 28,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  },
  "status": "success",
  "message": "User created successfully"
}
```

#### Update User
```http
PUT /api/users/:id
Content-Type: application/json
```

**Request Body (semua field optional):**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 30
}
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 30,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T01:00:00Z"
  },
  "status": "success",
  "message": "User updated successfully"
}
```

#### Delete User
```http
DELETE /api/users/:id
```

**Response:**
```json
{
  "status": "success",
  "message": "User deleted successfully"
}
```

---

### Products API

#### Get All Products
```http
GET /api/products
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 15000000,
      "stock": 10,
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "status": "success",
  "count": 1
}
```

#### Get Product by ID
```http
GET /api/products/:id
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "name": "Laptop",
    "price": 15000000,
    "stock": 10,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  },
  "status": "success"
}
```

#### Create Product
```http
POST /api/products
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Laptop",
  "price": 15000000,
  "stock": 10
}
```

**Response (201):**
```json
{
  "data": {
    "id": 1,
    "name": "Laptop",
    "price": 15000000,
    "stock": 10,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  },
  "status": "success",
  "message": "Product created successfully"
}
```

#### Update Product
```http
PUT /api/products/:id
Content-Type: application/json
```

**Request Body (semua field optional):**
```json
{
  "name": "Gaming Laptop",
  "price": 20000000,
  "stock": 5
}
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "name": "Gaming Laptop",
    "price": 20000000,
    "stock": 5,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T01:00:00Z"
  },
  "status": "success",
  "message": "Product updated successfully"
}
```

#### Delete Product
```http
DELETE /api/products/:id
```

**Response:**
```json
{
  "status": "success",
  "message": "Product deleted successfully"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Name and email are required",
  "status": "error"
}
```

### 404 Not Found
```json
{
  "message": "User not found",
  "status": "error"
}
```

### 500 Internal Server Error
```json
{
  "message": "Error fetching users",
  "status": "error"
}
```

## Testing dengan cURL

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":28}'
```

### Update User
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","age":30}'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## Testing dengan Postman

1. Import collection atau buat request manual
2. Set method (GET, POST, PUT, DELETE)
3. Set URL sesuai endpoint
4. Untuk POST/PUT, tambahkan body dengan format JSON
5. Set header `Content-Type: application/json`
