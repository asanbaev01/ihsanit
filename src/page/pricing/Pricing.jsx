// page/pricing/Pricing.js
import React, { useState } from 'react'

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', company: '' })
  const [submitted, setSubmitted] = useState(false)

  const plans = [
    { 
      name: 'Basic', 
      price: 3000, 
      period: 'месяц', 
      features: ['1 курс в месяц', 'Базовая поддержка', 'Доступ в сообщество', 'Материалы курса', 'Сертификат'], 
      popular: false, 
      courses: 'Любой 1 курс'
    },
    { 
      name: 'Premium', 
      price: 7000, 
      period: 'месяц', 
      features: ['Все курсы', 'Приоритетная поддержка 24/7', 'Индивидуальные сессии с ментором', 'Проверка проектов', 'Сертификат + Портфолио', 'Помощь с трудоустройством'], 
      popular: true, 
      courses: 'Все курсы'
    },
    { 
      name: 'Annual', 
      price: 60000, 
      period: 'год', 
      features: ['Все Premium функции', '2 месяца бесплатно', 'Карьерный коучинг 1-на-1', 'Стажировка', 'Пожизненный доступ в сообщество'], 
      popular: false, 
      courses: 'Полный доступ на год'
    },
    { 
      name: 'Corporate', 
      price: 'Договорная', 
      period: 'команда', 
      features: ['Индивидуальные курсы', 'Обучение команды', 'HR консультации', 'Отслеживание прогресса', 'Сертификаты для всех'], 
      popular: false, 
      courses: 'Индивидуальная программа'
    }
  ]

  const handleSelect = (plan) => {
    setSelectedPlan(plan)
    setShowModal(true)
    setFormData({ name: '', phone: '', email: '', company: '' })
    setSubmitted(false)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      alert('Спасибо! Наш менеджер свяжется с вами в ближайшее время.')
    }, 2000)
  }

  return (
    <section className="pricing" id="pricing">
      <h1>Тарифы</h1>
      <p className="pricing-subtitle">Выберите подходящий тариф и начните IT карьеру</p>

      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">🔥 Самый популярный</div>}
            <h3>{plan.name}</h3>
            <div className="pricing-price">
              <span className="currency">сом</span>
              <span className="amount">{typeof plan.price === 'number' ? plan.price.toLocaleString() : plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>
            <p className="pricing-courses">{plan.courses}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx}>
                  <span className="checkmark">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button 
              className={plan.popular ? 'btn-primary' : 'btn-secondary'} 
              onClick={() => handleSelect(plan)}
            >
              {plan.name === 'Corporate' ? 'Связаться' : 'Выбрать'}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-note">
        <p>⭐ Все курсы можно бесплатно протестировать 7 дней! Полный возврат средств.</p>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>×</button>
            <h2 className="modal-title">{selectedPlan?.name === 'Corporate' ? 'Корпоративное обучение' : `Выбор тарифа: ${selectedPlan?.name}`}</h2>
            
            {!submitted ? (
              <form className="modal-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Ваше имя" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Телефон" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                {selectedPlan?.name === 'Corporate' && (
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Название компании" 
                    value={formData.company} 
                    onChange={handleChange} 
                    required 
                  />
                )}
                <p className="modal-price-text">
                  {selectedPlan?.name === 'Corporate' 
                    ? '💰 Стоимость: Договорная' 
                    : `💰 Стоимость: ${selectedPlan?.price.toLocaleString()} сом/${selectedPlan?.period}`}
                </p>
                <button type="submit" className="modal-submit-btn">Отправить заявку</button>
              </form>
            ) : (
              <div className="modal-success">
                <div className="success-icon">✓</div>
                <p>Заявка отправлена!</p>
                <small>Мы свяжемся с вами в ближайшее время</small>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Pricing