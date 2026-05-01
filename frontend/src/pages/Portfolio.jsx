import { useState, useEffect } from 'react';
import { portfolioAPI } from '../api/api.js';
import './Portfolio.css';

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const response = await portfolioAPI.getAll();
      setItems(response.data);
    } catch (err) {
      setError('Failed to load portfolio items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...new Set(items.map(item => item.category || 'general'))];
  const filteredItems = filter === 'all' ? items : items.filter(item => (item.category || 'general') === filter);

  if (loading) {
    return <div className="portfolio-page"><p>Loading portfolio...</p></div>;
  }

  if (error) {
    return <div className="portfolio-page error">{error}</div>;
  }

  return (
    <section className="portfolio-page">
      <div className="portfolio-container">
        <h1>Our Portfolio</h1>
        <p className="subtitle">Explore our latest AI video creation projects</p>

        {items.length > 0 && (
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        )}

        {filteredItems.length === 0 ? (
          <div className="no-items">
            <p>No portfolio items available yet.</p>
          </div>
        ) : (
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div key={item._id} className="portfolio-item">
                {item.thumbnail && (
                  <img src={item.thumbnail} alt={item.title} className="item-thumbnail" />
                )}
                <div className="item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
