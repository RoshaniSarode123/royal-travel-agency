# WanderLuxe - Premium Travel Agency Platform

WanderLuxe is a modern, visually stunning, full-stack travel agency platform with a luxury theme. It features a responsive HTML/Tailwind frontend and a Node.js/Express backend with MongoDB integration.

## Features

**Frontend:**
- 🎨 Modern, premium luxury design with Glassmorphism
- 📱 Fully responsive (Tailwind CSS)
- ✨ Smooth animations (AOS & Custom CSS)
- 🌙 Dark Mode Support
- 🔒 Authentication Pages (Login/Register)
- 🗺️ Destinations and Packages Catalog
- 💳 Booking System Mockup
- 📊 Admin Dashboard UI

**Backend:**
- 🟢 Node.js & Express API
- 🗄️ MongoDB Database (Mongoose)
- 🔑 JWT Authentication & bcrypt
- 🛡️ Role-based access control (Admin/User)
- 📦 CRUD operations for Packages, Destinations, Bookings, Contacts

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account (or local MongoDB)

### 1. Backend Setup
1. Open the `.env` file in the root directory.
2. Replace `<username>`, `<password>`, and `your_jwt_secret_key_here` with your actual MongoDB Atlas credentials and a secure random string.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
The frontend is served directly by the backend for convenience, but you can also run it independently using Live Server or any static server.
Just open `client/index.html` in your browser or navigate to `http://localhost:5000` after starting the Node server.

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Destinations
- `GET /api/destinations`
- `POST /api/destinations` (Admin)

### Packages
- `GET /api/packages`
- `POST /api/packages` (Admin)

### Bookings
- `POST /api/bookings` (Private)
- `GET /api/bookings/mybookings` (Private)
- `GET /api/bookings` (Admin)

### Contact
- `POST /api/contact`
- `GET /api/contact` (Admin)

## Deployment

**Backend:** Deploy the root folder to Render, Railway, or Heroku. Make sure to set Environment Variables.
**Frontend:** You can deploy the `client` folder to Vercel, Netlify, or GitHub Pages. Note: You will need to update the `API_URL` in `client/js/api.js` to point to your deployed backend URL.
