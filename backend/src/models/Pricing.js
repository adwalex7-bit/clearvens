import mongoose from 'mongoose';

const pricingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: String,
  features: [String],
  featured: { type: Boolean, default: false },
  order: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Pricing', pricingSchema);
