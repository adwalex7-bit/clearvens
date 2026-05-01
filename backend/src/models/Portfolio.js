import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, enum: ['anime', 'commercial', 'music-video', 'movie-trailer', 'product', 'explainer'], required: true },
  type: { type: String, enum: ['youtube', 'video', 'image'], required: true },
  url: { type: String, required: true }, // YouTube ID or file path
  thumbnail: String,
  order: Number,
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Portfolio', portfolioSchema);
