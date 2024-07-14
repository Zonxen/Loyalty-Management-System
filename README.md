# Loyalty Management System API

Loyalty Management System API adalah API untuk mengelola sistem loyalitas dengan fitur `Sign In` menggunakan Node.js, Express.js, dan PostgreSQL.

## Fitur

- User Sign In dengan fitur `Remember Me`
- Mendapatkan token JWT saat Sign In

## Persyaratan

- Node.js
- PostgreSQL
- NPM atau Yarn

## Instalasi

1. Clone repositori ini

   ```bash
   git clone https://github.com/zonxen/loyalty-management-system.git
   cd loyalty-management-system

   ```

2. Install dependencies

```bash
   npm install
```

3. Buat file .env di root direktori dan tambahkan konfigurasi berikut:

```bash
   DB_NAME = your_db_name
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_HOST=localhost
   DB_DIALECT=postgres
   JWT_SECRET=your_jwt_secret

```

4. Setup database PostgreSQL dan jalankan migrasi

```bash
   npx sequelize-cli db:migrate

```

## Menjalankan Server

1. Jalankan server

```bash
   npm run dev
```

2. Server akan berjalan di http://localhost:3000

## Dokumentasi API

1. Sign In

```bash
   URL: /api/auth/signin
   Method: POST
   Request Body:
   {
  "email": "user@example.com",
  "password": "yourpassword",
  "rememberMe": true
  }

```

2. Membership

```bash
   URL: /api/membership/list
   Method: GET
   Response Body:
   [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@gmail.com",
        "phoneNo": "123456789",
        "joinDate": "2023-01-01T00:00:00.000Z",
        "remainedPoint": 100,
        "status": "Active"
    },
    {
        "id": 5,
        "name": "Jane Doe",
        "email": "jane@gmail.com",
        "phoneNo": "987654321",
        "joinDate": "2023-02-01T00:00:00.000Z",
        "remainedPoint": 150,
        "status": "Active"
    }
]

```
