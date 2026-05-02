# Clearvens - AI Video Creation Platform

A full-stack dynamic website for showcasing AI video creation services, built with React, Express, and MongoDB.

## 🚀 Live Demo

Visit the live site: [https://clearvens.vercel.app](https://clearvens.vercel.app)

## 📋 Features

✅ **Dynamic Portfolio** - Showcase your AI video projects  
✅ **Testimonials** - Display client reviews and ratings  
✅ **Pricing Plans** - Manage and display pricing tiers  
✅ **Contact Form** - Accept inquiries from potential clients  
✅ **Admin Dashboard** - Manage all content (portfolio, testimonials, pricing)  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Modern UI** - Beautiful gradients and animations  

## 🛠 Tech Stack

**Frontend:**
- React 18.2
- Vite 4.2
- React Router 6.9
- Axios 1.3
- CSS3 (custom styling)

**Backend:**
- Node.js with Express 4.18
- MongoDB with Mongoose 7.0
- JWT Authentication
- CORS enabled
- Multer for file uploads

## 📁 Project Structure

```
.
├── backend/                 # Node.js Express API
│   ├── src/
│   │   ├── index.js        # Server entry point
│   │   ├── controllers/    # API logic
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API endpoints
│   │   └── middleware/     # Auth & middleware
│   ├── .env                # Environment variables
│   └── package.json
│
├── frontend/               # React + Vite App
│   ├── src/
│   │   ├── pages/         # Portfolio, Testimonials, Pricing
│   │   ├── components/    # ContactForm, etc.
│   │   ├── admin/         # Admin Dashboard
│   │   ├── api/           # API client
│   │   └── App.jsx        # Main app with routing
│   ├── .env               # Environment variables
│   └── package.json
│
├── vercel.json            # Vercel deployment config
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB (local or cloud - MongoDB Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/adwalex7-bit/clearvens.git
cd clearvens
```

### 2. Setup Backend

```bash
cd backend
npm install

# Create .env file
cat > .env << EOF
PORT=5000
MONGODB_URI=mongodb://localhost:27017/clearvens
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key_here_change_in_production
NODE_ENV=development
EOF

# Start backend
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Setup Frontend

```bash
cd frontend
npm install

# Create .env file
cat > .env << EOF
VITE_API_URL=http://localhost:5000/api
EOF

# Start frontend
npm run dev
```

Frontend will run on `http://localhost:3000`

## 📱 Using the Application

### Visiting the Website
- **Home**: `http://localhost:3000`
- **Portfolio**: `/portfolio`
- **Testimonials**: `/testimonials`
- **Pricing**: `/pricing`
- **Admin Dashboard**: `/admin`

### Admin Dashboard Access
1. Go to `/admin`
2. Default credentials (you should change these in production):
   - Email: admin@clearvens.com
   - Password: Admin@123

### Features in Admin Dashboard

**Portfolio Management:**
- Add/Edit/Delete portfolio items
- Set category, thumbnail, and project links

**Testimonials Management:**
- Add/Edit/Delete client testimonials
- Set rating (1-5 stars)

**Pricing Management:**
- Create pricing plans
- Set features and billing periods
- Mark plans as featured

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import this repository
   - Vercel will auto-detect the configuration

3. **Set Environment Variables**
   In Vercel dashboard, add:
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - A secure random string
   - `FRONTEND_URL` - Your Vercel frontend URL

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Deploy Backend to Railway/Render

**Option A: Railway**
1. Go to [railway.app](https://railway.app)
2. Connect GitHub
3. Select this repository
4. Add MongoDB plugin
5. Set environment variables
6. Deploy

**Option B: Render**
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set:
   - Build: `cd backend && npm install`
   - Start: `npm start`
5. Add environment variables
6. Deploy

## 📝 API Endpoints

### Public Endpoints
```
GET  /api/health              - Health check
GET  /api/portfolio           - Get all portfolio items
GET  /api/testimonials        - Get all testimonials
GET  /api/pricing             - Get all pricing plans
POST /api/contact             - Submit contact form
```

### Admin Endpoints (Requires JWT)
```
POST   /api/portfolio         - Create portfolio item
PUT    /api/portfolio/:id     - Update portfolio item
DELETE /api/portfolio/:id     - Delete portfolio item

POST   /api/testimonials      - Create testimonial
PUT    /api/testimonials/:id  - Update testimonial
DELETE /api/testimonials/:id  - Delete testimonial

POST   /api/pricing           - Create pricing plan
PUT    /api/pricing/:id       - Update pricing plan
DELETE /api/pricing/:id       - Delete pricing plan

POST   /api/auth/login        - Admin login
POST   /api/auth/register     - Admin registration (protected)
```

## 🔐 Security

- JWT authentication for admin endpoints
- CORS protection
- Password hashing with bcryptjs
- Environment variables for sensitive data
- Input validation

## 📊 Database Schema

### Portfolio Model
```javascript
{
  title: String,
  description: String,
  category: String,
  thumbnail: String,
  link: String,
  createdAt: Date
}
```

### Testimonial Model
```javascript
{
  author: String,
  title: String,
  text: String,
  rating: Number (1-5),
  createdAt: Date
}
```

### Pricing Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  billingPeriod: String,
  features: [String],
  featured: Boolean,
  createdAt: Date
}
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check `MONGODB_URI` in `.env`
- For MongoDB Atlas, whitelist your IP

### CORS Errors
- Update `FRONTEND_URL` in backend `.env`
- Make sure frontend URL matches

### Frontend Can't Reach API
- Check `VITE_API_URL` in frontend `.env`
- Make sure backend is running on correct port

### Admin Login Not Working
- Check MongoDB connection
- Verify admin user exists in database
- Check JWT_SECRET is set

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see LICENSE file for details.

## 👨‍💼 Author

**Clearvens** - AI Video Creation Services

- GitHub: [@adwalex7-bit](https://github.com/adwalex7-bit)
- Website: [clearvens.vercel.app](https://clearvens.vercel.app)

## 📞 Support

For support, email: support@clearvens.com or visit our contact page.

---

**Happy coding! 🚀**
