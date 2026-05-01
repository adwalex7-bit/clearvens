import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Pages
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import AdminDashboard from './admin/AdminDashboard'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">Clearvens</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Clearvens. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Professional AI Video Creation</h1>
          <p>Transform your ideas into stunning visual content with cutting-edge AI technology</p>
          <Link to="/portfolio" className="cta-button">View Our Work</Link>
        </div>
      </section>

      <section className="home-portfolio" id="portfolio">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Showcase of our best AI video creations</p>
        <div className="portfolio-grid">
          <div className="portfolio-item-preview">
            <div className="placeholder">AI Anime</div>
            <h3>Anime Creation</h3>
          </div>
          <div className="portfolio-item-preview">
            <div className="placeholder">Commercial</div>
            <h3>Commercial Videos</h3>
          </div>
          <div className="portfolio-item-preview">
            <div className="placeholder">Explainer</div>
            <h3>Explainer Videos</h3>
          </div>
          <div className="portfolio-item-preview">
            <div className="placeholder">Music Video</div>
            <h3>Music Videos</h3>
          </div>
        </div>
        <Link to="/portfolio" className="view-all-btn">View All Portfolio →</Link>
      </section>

      <section className="home-testimonials" id="testimonials">
        <h2>Client Testimonials</h2>
        <p className="section-subtitle">What our clients say about us</p>
        <div className="testimonials-preview">
          <div className="testimonial-preview-card">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"Excellent service and amazing quality!"</p>
            <strong>John Doe</strong>
          </div>
          <div className="testimonial-preview-card">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"Professional team with outstanding results."</p>
            <strong>Jane Smith</strong>
          </div>
          <div className="testimonial-preview-card">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"Highly recommended for video creation."</p>
            <strong>Mike Johnson</strong>
          </div>
        </div>
        <Link to="/testimonials" className="view-all-btn">View All Testimonials →</Link>
      </section>

      <ContactForm />
    </>
  )
}

export default App
