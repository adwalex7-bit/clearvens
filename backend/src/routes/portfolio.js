import express from 'express';
import Portfolio from '../models/Portfolio.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

// Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const query = category ? { category } : {};
    const items = await Portfolio.find(query).sort({ order: 1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single portfolio item
router.get('/:id', async (req, res) => {
  try {
    const item = await Portfolio.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create portfolio item (admin only)
router.post('/', verifyToken, async (req, res) => {
  const item = new Portfolio(req.body);
  try {
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update portfolio item (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const item = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete portfolio item (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
