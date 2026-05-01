import express from 'express';
import Pricing from '../models/Pricing.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

// Get all pricing plans
router.get('/', async (req, res) => {
  try {
    const plans = await Pricing.find().sort({ order: 1 });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create pricing plan (admin only)
router.post('/', verifyToken, async (req, res) => {
  const plan = new Pricing(req.body);
  try {
    const saved = await plan.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update pricing plan (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const plan = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(plan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete pricing plan (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Pricing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Plan deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
