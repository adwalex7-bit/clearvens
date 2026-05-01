import express from 'express';
import Testimonial from '../models/Testimonial.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ order: 1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create testimonial (admin only)
router.post('/', verifyToken, async (req, res) => {
  const testimonial = new Testimonial(req.body);
  try {
    const saved = await testimonial.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update testimonial (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete testimonial (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
