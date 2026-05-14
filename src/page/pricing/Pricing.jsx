// components/Pricing.js
import React from 'react'

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '3000',
      period: 'month',
      features: ['1 course access', 'Basic support', 'Community access', 'Course materials', 'Certificate'],
      popular: false,
      courses: ['Any 1 course']
    },
    {
      name: 'Premium',
      price: '7000',
      period: 'month',
      features: ['All courses access', 'Priority support 24/7', 'Mentor sessions', 'Project reviews', 'Certificate + Portfolio', 'Job assistance'],
      popular: true,
      courses: ['All courses']
    },
    {
      name: 'Annual',
      price: '60000',
      period: 'year',
      features: ['All Premium features', '2 months free', '1-on-1 career coaching', 'Internship opportunity', 'Lifetime community access'],
      popular: false,
      courses: ['Complete access for 1 year']
    },
    {
      name: 'Corporate',
      price: 'Custom',
      period: 'team',
      features: ['Custom courses', 'Team training', 'HR consultation', 'Progress tracking', 'Certificates for all'],
      popular: false,
      courses: ['Tailored program']
    }
  ]

  return (
    <section className="pricing">
      <h1>Pricing Plans</h1>
      <p className="pricing-subtitle">Өзүңүзгө ылайыктуу планды тандаңыз жана IT карьераңызды баштаңыз</p>

      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">🔥 Most Popular</div>}
            <h3>{plan.name}</h3>
            <div className="pricing-price">
              <span className="currency">сом</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>
            <p className="pricing-courses">{plan.courses}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx}>✓ {feature}</li>
              ))}
            </ul>
            <button className={plan.popular ? 'btn-primary' : 'btn-secondary'}>
              {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-note">
        <p>⭐ Бардык курстарды 7 күн ичинде акысыз сынап көрүңүз! Толук кайтарым кепилдик.</p>
      </div>
    </section>
  )
}

export default Pricing