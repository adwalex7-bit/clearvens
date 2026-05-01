# Clearvens - Dynamic AI Video Creation Website

A full-stack web application for showcasing and managing AI-generated video content.

## Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: React + Vite
- **Database**: MongoDB
- **Authentication**: JWT
- **Admin**: CMS Dashboard for content management

## Project Structure

```
├── backend/                    # Express API server
│   ├── src/
│   │   ├── models/            # MongoDB schemas
│   │   ├── routes/            # API endpoints
│   │   ├── controllers/       # Business logic
│   │   ├── middleware/        # Auth & validation
│   │   └── index.js           # Main server file
│   ├── package.json
│   └── .env.example
│
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── admin/            # Admin dashboard
│   │   ├── api/              # API client
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
│
└── .github/
    └── copilot-instructions.md
```

## Setup Instructions

### Backend Setup

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update MongoDB connection string in `.env`

5. Start development server:
   ```bash
   npm run dev
   ```

Backend runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

Frontend runs on `http://localhost:3000`

## Available API Endpoints

### Public Endpoints
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio?category=anime` - Get portfolio by category
- `GET /api/testimonials` - Get all testimonials
- `GET /api/pricing` - Get pricing plans
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Protected)
- `POST /api/auth/login` - Admin login
- `POST /api/portfolio` - Create portfolio item
- `PUT /api/portfolio/:id` - Update portfolio item
- `DELETE /api/portfolio/:id` - Delete portfolio item
- Similar CRUD operations for testimonials and pricing

## Features

- ✅ Dynamic portfolio management
- ✅ Testimonials management
- ✅ Pricing plans management
- ✅ Admin authentication
- ✅ Contact form submissions
- ✅ Responsive design
- ✅ YouTube embed support
- ✅ Local video hosting

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/clearvens
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Development

Run both servers simultaneously:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Next Steps

1. Set up MongoDB locally or use MongoDB Atlas
2. Create initial admin user
3. Build out admin dashboard components
4. Integrate email notifications
5. Deploy to production

## License

ISC
