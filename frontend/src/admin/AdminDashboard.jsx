import { useState, useEffect } from 'react';
import { authAPI, portfolioAPI, testimonialsAPI, pricingAPI } from '../api/api.js';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [data, setData] = useState({ portfolio: [], testimonials: [], pricing: [] });
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  // Load data
  useEffect(() => {
    if (isLoggedIn && activeTab === 'portfolio') {
      loadPortfolio();
    } else if (isLoggedIn && activeTab === 'testimonials') {
      loadTestimonials();
    } else if (isLoggedIn && activeTab === 'pricing') {
      loadPricing();
    }
  }, [activeTab, isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authAPI.logout();
    setIsLoggedIn(false);
    setActiveTab('portfolio');
  };

  const loadPortfolio = async () => {
    try {
      const response = await portfolioAPI.getAll();
      setData(prev => ({ ...prev, portfolio: response.data }));
    } catch (error) {
      console.error('Failed to load portfolio:', error);
    }
  };

  const loadTestimonials = async () => {
    try {
      const response = await testimonialsAPI.getAll();
      setData(prev => ({ ...prev, testimonials: response.data }));
    } catch (error) {
      console.error('Failed to load testimonials:', error);
    }
  };

  const loadPricing = async () => {
    try {
      const response = await pricingAPI.getAll();
      setData(prev => ({ ...prev, pricing: response.data }));
    } catch (error) {
      console.error('Failed to load pricing:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'portfolio') {
        if (editingId) {
          await portfolioAPI.update(editingId, formData);
          loadPortfolio();
        } else {
          await portfolioAPI.create(formData);
          loadPortfolio();
        }
      } else if (activeTab === 'testimonials') {
        if (editingId) {
          await testimonialsAPI.update(editingId, formData);
          loadTestimonials();
        } else {
          await testimonialsAPI.create(formData);
          loadTestimonials();
        }
      } else if (activeTab === 'pricing') {
        if (editingId) {
          await pricingAPI.update(editingId, formData);
          loadPricing();
        } else {
          await pricingAPI.create(formData);
          loadPricing();
        }
      }
      setFormData({});
      setEditingId(null);
      alert('Item saved successfully!');
    } catch (error) {
      alert('Failed to save item.');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      if (activeTab === 'portfolio') {
        await portfolioAPI.delete(id);
        loadPortfolio();
      } else if (activeTab === 'testimonials') {
        await testimonialsAPI.delete(id);
        loadTestimonials();
      } else if (activeTab === 'pricing') {
        await pricingAPI.delete(id);
        loadPricing();
      }
      alert('Item deleted successfully!');
    } catch (error) {
      alert('Failed to delete item.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="admin-tabs">
        {['portfolio', 'testimonials', 'pricing'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="admin-content">
        <form onSubmit={handleSubmit} className="admin-form">
          {activeTab === 'portfolio' && (
            <>
              <input
                type="text"
                placeholder="Title"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
              <input
                type="text"
                placeholder="Thumbnail URL"
                value={formData.thumbnail || ''}
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
              />
              <input
                type="text"
                placeholder="Project Link"
                value={formData.link || ''}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              />
            </>
          )}

          {activeTab === 'testimonials' && (
            <>
              <input
                type="text"
                placeholder="Author Name"
                value={formData.author || ''}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
              <input
                type="text"
                placeholder="Author Title/Company"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <textarea
                placeholder="Testimonial Text"
                value={formData.text || ''}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              />
              <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                value={formData.rating || '5'}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
              />
            </>
          )}

          {activeTab === 'pricing' && (
            <>
              <input
                type="text"
                placeholder="Plan Name"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                value={formData.price || ''}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              />
              <input
                type="text"
                placeholder="Billing Period (e.g., month, year)"
                value={formData.billingPeriod || ''}
                onChange={(e) => setFormData({ ...formData, billingPeriod: e.target.value })}
              />
              <textarea
                placeholder="Features (comma-separated)"
                value={(formData.features || []).join(', ')}
                onChange={(e) => setFormData({ ...formData, features: e.target.value.split(',').map(f => f.trim()) })}
              />
              <label>
                <input
                  type="checkbox"
                  checked={formData.featured || false}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                />
                Featured Plan
              </label>
            </>
          )}

          <button type="submit">{editingId ? 'Update' : 'Add'} Item</button>
        </form>

        <div className="items-list">
          {activeTab === 'portfolio' && data.portfolio.map(item => (
            <div key={item._id} className="item-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="item-actions">
                <button onClick={() => { setFormData(item); setEditingId(item._id); }}>Edit</button>
                <button onClick={() => handleDelete(item._id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}

          {activeTab === 'testimonials' && data.testimonials.map(item => (
            <div key={item._id} className="item-card">
              <h4>{item.author}</h4>
              <p>"{item.text}"</p>
              <div className="item-actions">
                <button onClick={() => { setFormData(item); setEditingId(item._id); }}>Edit</button>
                <button onClick={() => handleDelete(item._id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}

          {activeTab === 'pricing' && data.pricing.map(item => (
            <div key={item._id} className="item-card">
              <h4>{item.name} - ${item.price}/{item.billingPeriod}</h4>
              <p>{item.description}</p>
              <div className="item-actions">
                <button onClick={() => { setFormData(item); setEditingId(item._id); }}>Edit</button>
                <button onClick={() => handleDelete(item._id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
