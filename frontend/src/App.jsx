import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [portfolioItems, setPortfolioItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/portfolio`)
        setPortfolioItems(response.data)
      } catch (error) {
        console.error('Error fetching portfolio:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolio()
  }, [])

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Clearvens</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Professional AI Video Creation</h1>
          <p>Transform your ideas into stunning visual content with cutting-edge AI technology</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2>Our Portfolio</h2>
        {loading ? (
          <p>Loading portfolio...</p>
        ) : (
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item._id} className="portfolio-card">
                <div className="video-container">
                  {item.type === 'youtube' ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.url}`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video controls>
                      <source src={item.url} type="video/mp4" />
                    </video>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer>
        <p>&copy; 2026 Clearvens. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
