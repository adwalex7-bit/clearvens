import express from 'express';

const router = express.Router();

// Contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields required' });
    }

    // TODO: Save to database or send email
    console.log('Contact form submission:', { name, email, subject, message });

    res.json({ message: 'Message received successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
