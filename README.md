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
