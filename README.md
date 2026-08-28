# ShopEase - Full Stack MERN E-Commerce Application

ShopEase is a modern, modular, beginner-friendly e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🚀 Features

### User Features
- **User Authentication**: Secure Login & Registration with JWT and password hashing using `bcryptjs`.
- **Product Catalog**: Browse products with live search by name, category filtering, and price sorting (low to high, high to low, newest).
- **Product Details**: Detailed view including image, description, price, category, rating, stock status, and quantity selector.
- **Shopping Cart**: Dynamic cart with local storage persistence, subtotal calculation, quantity adjustments, and stock validation.
- **Order Management**: Cash on Delivery checkout, order status tracking (Pending, Processing, Shipped, Delivered, Cancelled), and order cancellation.
- **User Profile**: Profile information view, profile detail updates, and secure password change functionality.

### Admin Features
- **Admin Dashboard**: Real-time stats showing Total Revenue, Total Orders, Total Products, and Total Users.
- **Product Management**: Create, view, edit, and delete products with stock management.
- **Order Management**: View all user orders and update order delivery statuses.
- **User Management**: View registered users list and remove accounts.

---

## 🛠️ Technology Stack

- **Frontend**: React.js (Vite), React Router v6, Axios, Lucide Icons, Plain CSS (CSS Variables, Flexbox, CSS Grid).
- **Backend**: Node.js, Express.js, Mongoose (MongoDB ODM), JSON Web Tokens (`jsonwebtoken`), `bcryptjs`, CORS, Dotenv.
- **Database**: MongoDB (Local or MongoDB Atlas).

---

## 📁 Project Structure

```
ShopEase/
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── ProductCard.jsx
│       │   ├── SearchBar.jsx
│       │   ├── CategoryCard.jsx
│       │   ├── CartItem.jsx
│       │   ├── Loading.jsx
│       │   └── ProtectedRoute.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Products.jsx
│       │   ├── ProductDetails.jsx
│       │   ├── Cart.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── Profile.jsx
│       │   ├── Orders.jsx
│       │   ├── OrderDetails.jsx
│       │   └── About.jsx
│       ├── admin/
│       │   ├── Dashboard.jsx
│       │   ├── Products.jsx
│       │   ├── AddProduct.jsx
│       │   ├── EditProduct.jsx
│       │   ├── Orders.jsx
│       │   └── Users.jsx
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   └── CartContext.jsx
│       ├── services/
│       │   └── api.js
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Category.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── categoryController.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── categoryRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── seeder.js
│   ├── package.json
│   ├── .env
│   └── .env.example
├── README.md
└── .gitignore
```

---

## 🔑 Environment Variables

Create `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shop_ease
JWT_SECRET=shopease_super_secret_jwt_key_2026
CLIENT_URL=http://localhost:5173
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB installed locally and running, or a MongoDB Atlas URI

### 1. Backend Setup

```bash
cd backend
npm install
npm run seed     # (Optional) Seeds sample categories, 20+ products, admin, and test users
npm run dev      # Starts Express server on http://localhost:5000
```

### 2. Frontend Setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev      # Starts Vite dev server on http://localhost:5173
```

---

## 🔑 Seed Accounts for Development

When running `npm run seed` in backend:

- **Admin Account**:
  - Email: `admin@shopease.com`
  - Password: `adminpassword`
  - Role: `admin`

- **Normal User Account**:
  - Email: `user@shopease.com`
  - Password: `userpassword`
  - Role: `user`

---

## 📡 API Overview

- **Auth & Users**: `/api/users/register`, `/api/users/login`, `/api/users/profile`, `/api/users/profile/update`, `/api/users/change-password`
- **Products**: `/api/products` (GET, POST), `/api/products/:id` (GET, PUT, DELETE)
- **Categories**: `/api/categories` (GET, POST), `/api/categories/:id` (GET, PUT, DELETE)
- **Orders**: `/api/orders` (GET, POST), `/api/orders/myorders` (GET), `/api/orders/:id` (GET, PUT), `/api/orders/:id/cancel` (PUT), `/api/orders/admin/stats` (GET)
