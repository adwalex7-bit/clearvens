import { useState, useEffect } from 'react';
import { pricingAPI } from '../api/api.js';
import './Pricing.css';

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      setLoading(true);
      const response = await pricingAPI.getAll();
      setPlans(response.data);
    } catch (err) {
      setError('Failed to load pricing plans');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="pricing-page"><p>Loading pricing...</p></div>;
  }

  if (error) {
    return <div className="pricing-page error">{error}</div>;
  }

  return (
    <section className="pricing-page">
      <div className="pricing-container">
        <h1>Simple, Transparent Pricing</h1>
        <p className="subtitle">Choose the plan that works best for your project</p>

        {plans.length === 0 ? (
          <div className="no-plans">
            <p>Pricing plans coming soon. Contact us for custom quotes!</p>
          </div>
        ) : (
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan._id} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="featured-badge">Most Popular</div>}
                <h2>{plan.name}</h2>
                <p className="description">{plan.description}</p>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  {plan.billingPeriod && <span className="period">/{plan.billingPeriod}</span>}
                </div>
                <ul className="features">
                  {plan.features && plan.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
