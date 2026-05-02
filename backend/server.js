// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API routes import
const portfolioRoutes = require('./routes/portfolio');
const testimonialsRoutes = require('./routes/testimonials');
const pricingRoutes = require('./routes/pricing');

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/pricing', pricingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
