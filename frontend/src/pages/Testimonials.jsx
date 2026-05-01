import { useState, useEffect } from 'react';
import { testimonialsAPI } from '../api/api.js';
import './Testimonials.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await testimonialsAPI.getAll();
      setTestimonials(response.data);
    } catch (err) {
      setError('Failed to load testimonials');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="testimonials-page"><p>Loading testimonials...</p></div>;
  }

  if (error) {
    return <div className="testimonials-page error">{error}</div>;
  }

  return (
    <section className="testimonials-page">
      <div className="testimonials-container">
        <h1>What Our Clients Say</h1>
        <p className="subtitle">Don't just take our word for it - hear directly from our satisfied clients</p>

        {testimonials.length === 0 ? (
          <div className="no-testimonials">
            <p>No testimonials available yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="testimonial-card">
                <div className="star-rating">
                  {'⭐'.repeat(testimonial.rating || 5)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span className="author-title">{testimonial.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
