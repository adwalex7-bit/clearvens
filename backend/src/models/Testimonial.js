import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  image: String,
  order: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Testimonial', testimonialSchema);
