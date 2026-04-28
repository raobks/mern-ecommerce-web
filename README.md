# MERN E-Commerce App

A full-stack MERN ecommerce web application with a React frontend and an Express/MongoDB backend.

## Overview

This project includes:
- A React frontend for product browsing, search, filtering, cart and checkout flow
- An Express backend with REST APIs for products, users, orders, payments, and reviews
- MongoDB Atlas support for product data and user authentication
- Stripe integration for payment processing
- Cloudinary integration for product image uploads
- Admin routes for product management and order processing

## Tech Stack

- Frontend: React, Redux, React Router, Material-UI
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT tokens, cookies
- Payments: Stripe
- Image upload: Cloudinary

## Project Structure

- `backend/` — Express server, API routes, controllers, models, middleware, utilities
- `frontend/` — React application, components, Redux store, styles
- `package.json` — Root scripts and dependencies for backend and deployment

## Prerequisites

- Node.js and npm installed
- MongoDB Atlas account or local MongoDB running
- Cloudinary account for image upload
- Stripe account for payments

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mernProjectEcommerce-master
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Environment Variables

Create a file at `backend/config/config.env` and add the following values:

```env
PORT=4000
DB_URI=mongodb+srv://<username>:<password>@cluster0.utncgpk.mongodb.net/ecommerce
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
STRIPE_API_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SMPT_SERVICE=your_smtp_service
SMPT_MAIL=your_email@example.com
SMPT_PASSWORD=your_email_password
SMPT_HOST=smtp.example.com
SMPT_PORT=587
```

> Note: `SMPT_*` variables are used for email features such as password reset.

## Running the App

### Start backend server

From the project root:

```bash
npm run dev
```

### Start frontend app

From the project root:

```bash
cd frontend
npm start
```

Then visit `http://localhost:3000` in your browser.

## Available Scripts

### Root
- `npm run dev` — start backend with nodemon
- `npm start` — run backend in production mode
- `npm run build` — build frontend during deployment via `heroku-postbuild`

### Frontend
From `frontend/`:
- `npm start` — start React development server
- `npm run build` — build production bundle
- `npm test` — run tests

## Troubleshooting

- If React fails with a Node OpenSSL error, use:
  ```bash
  set NODE_OPTIONS=--openssl-legacy-provider
  npm start
  ```
  or in PowerShell:
  ```powershell
  $env:NODE_OPTIONS = "--openssl-legacy-provider"
  npm start
  ```
- If the backend cannot connect to MongoDB Atlas, verify Atlas network access and IP whitelist.
- Use `localhost:4000` as the backend proxy target in `frontend/package.json`.

## Notes

- Do not commit `backend/config/config.env` to version control.
- Make sure your MongoDB URI includes the database name, e.g. `/ecommerce`.

## Author

Project customized from a MERN ecommerce tutorial.
