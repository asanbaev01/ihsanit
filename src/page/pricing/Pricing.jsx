import React, { useState } from 'react'
import './Pricing.css'
import { FaCheckCircle, FaStar, FaRocket, FaUsers, FaChartLine, FaClock, FaShieldAlt, FaHeadset, FaLaptopCode, FaCertificate, FaBriefcase, FaInfinity, FaCalendarAlt, FaGift, FaUserGraduate, FaCommentDots, FaTelegram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', company: '', course: '' })
  const [submitted, setSubmitted] = useState(false)

  const plans = [
    { 
      name: 'START', 
      price: 2500, 
      period: 'месяц', 
      features: ['1 курс в месяц', 'Базовая поддержка (9:00-18:00)', 'Доступ в закрытое сообщество', 'Материалы курса в PDF', 'Сертификат об окончании', 'Доступ к записям уроков'], 
      popular: false, 
      courses: 'Любой 1 курс',
      color: '#9d9dff',
      icon: <FaUserGraduate />
    },
    { 
      name: 'PRO', 
      price: 5500, 
      period: 'месяц', 
      features: ['До 3 курсов одновременно', 'Приоритетная поддержка 24/7', '2 индивидуальные сессии с ментором', 'Проверка домашних заданий', 'Сертификат + Портфолио', 'Помощь с трудоустройством', 'Карьерные вебинары', 'Доступ ко всем материалам'], 
      popular: true, 
      courses: 'До 3 курсов',
      color: '#9d9dff',
      icon: <FaRocket />
    },
    { 
      name: 'PREMIUM', 
      price: 8500, 
      period: 'месяц', 
      features: ['Все курсы без ограничений', 'VIP поддержка 24/7', 'Неограниченные сессии с ментором', 'Персональный карьерный коуч', 'Помощь с составлением резюме', 'Подготовка к собеседованию', 'Стажировка в IT компании', 'Сертификат международного образца', 'Доступ к закрытым мероприятиям'], 
      popular: false, 
      courses: 'Все курсы',
      color: '#9d9dff',
      icon: <FaStar />
    },
    { 
      name: 'TEAM', 
      price: 15000, 
      period: 'месяц', 
      features: ['До 10 сотрудников', 'Индивидуальная программа обучения', 'HR консультации', 'Отслеживание прогресса команды', 'Сертификаты для всех сотрудников', 'Корпоративный портал', 'Ежемесячный отчет', 'Приоритетная поддержка'], 
      popular: false, 
      courses: 'Корпоративное обучение',
      color: '#9d9dff',
      icon: <FaUsers />
    },
    { 
      name: 'ENTERPRISE', 
      price: 'Договорная', 
      period: 'команда', 
      features: ['Неограниченное количество сотрудников', 'Полностью кастомизированная программа', 'Выделенный менеджер', 'API интеграция с вашей LMS', 'Онбординг сотрудников', 'Сертификация по стандартам ISO', 'Круглосуточная поддержка', 'Юридическое сопровождение'], 
      popular: false, 
      courses: 'Индивидуальная программа',
      color: '#9d9dff',
      icon: <FaBriefcase />
    }
  ]

  const additionalServices = [
    { name: 'Карьерная консультация', price: '500 сом', duration: '1 час', popular: true },
    { name: 'Резюме под ключ', price: '1000 сом', duration: '2 часа', popular: false },
    { name: 'Техническое собеседование', price: '1500 сом', duration: '1.5 часа', popular: false },
    { name: 'Менторская сессия', price: '2000 сом', duration: '1 час', popular: true },
    { name: 'Проект под ключ', price: 'от 5000 сом', duration: 'индивидуально', popular: false }
  ]

  const discounts = [
    { title: 'Студенческий', percent: '15%', condition: 'При предъявлении студенческого билета' },
    { title: 'Корпоративный', percent: '20%', condition: 'При обучении от 5 человек' },
    { title: 'Раннее бронирование', percent: '10%', condition: 'За 2 недели до старта' },
    { title: 'Реферальная программа', percent: '25%', condition: 'Приведи друга и получи скидку' }
  ]

  const handleSelect = (plan) => {
    setSelectedPlan(plan)
    setShowModal(true)
    setFormData({ name: '', phone: '', email: '', company: '', course: '' })
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
      <h1>Выберите свой путь к успеху</h1>
      <p className="pricing-subtitle">Инвестируйте в свое будущее с лучшими условиями обучения</p>

      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">🔥 Самый популярный</div>}
            <div className="plan-icon" style={{ color: plan.color }}>{plan.icon}</div>
            <h3>{plan.name}</h3>
            <div className="pricing-price">
              <span className="currency">сом</span>
              <span className={`amount ${typeof plan.price === 'string' ? 'text-price' : ''}`}>
                {typeof plan.price === 'number' ? plan.price.toLocaleString() : plan.price}
              </span>
              <span className="period">/{plan.period}</span>
            </div>
            <p className="pricing-courses">{plan.courses}</p>
            <ul className="pricing-features">
              {plan.features.slice(0, 6).map((feature, fIdx) => (
                <li key={fIdx}>
                  <span className="checkmark"><FaCheckCircle /></span> {feature}
                </li>
              ))}
              {plan.features.length > 6 && (
                <li className="more-features">+{plan.features.length - 6} дополнительных возможностей</li>
              )}
            </ul>
            <button 
              className={plan.popular ? 'btn-primary' : 'btn-secondary'} 
              onClick={() => handleSelect(plan)}
            >
              {plan.name === 'ENTERPRISE' ? 'Связаться с отделом' : 'Выбрать тариф'}
            </button>
          </div>
        ))}
      </div>

      <div className="discounts-section">
        <h2 className="discounts-title">Специальные предложения</h2>
        <div className="discounts-grid">
          {discounts.map((discount, idx) => (
            <div key={idx} className="discount-card">
              <div className="discount-percent">{discount.percent}</div>
              <h4>{discount.title}</h4>
              <p>{discount.condition}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="additional-services">
        <h2 className="services-title">Дополнительные услуги</h2>
        <div className="services-grid">
          {additionalServices.map((service, idx) => (
            <div key={idx} className={`service-card ${service.popular ? 'popular-service' : ''}`}>
              {service.popular && <span className="service-badge">Популярная</span>}
              <h4>{service.name}</h4>
              <div className="service-price">{service.price}</div>
              <p><FaClock /> {service.duration}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-info">
        <div className="info-box">
          <FaCalendarAlt />
          <span>Гибкий график обучения</span>
        </div>
        <div className="info-box">
          <FaShieldAlt />
          <span>100% гарантия возврата</span>
        </div>
        <div className="info-box">
          <FaClock />
          <span>Доступ к материалам 24/7</span>
        </div>
        <div className="info-box">
          <FaCertificate />
          <span>Сертификат по окончании</span>
        </div>
      </div>

      <div className="pricing-note">
        <p>⭐ Все курсы можно бесплатно протестировать 7 дней! Полный возврат средств в течение 14 дней.</p>
        <p className="installment">📱 Рассрочка 0% от банков-партнеров до 12 месяцев</p>
      </div>

      <div className="quick-contact">
        <h3>Остались вопросы?</h3>
        <div className="contact-buttons">
          <a href="tel:+996550123456" className="contact-btn phone"><FaPhoneAlt /> +996 550 123 456</a>
          <a href="https://wa.me/996550123456" className="contact-btn whatsapp"><FaWhatsapp /> WhatsApp</a>
          <a href="https://t.me/ohsanit" className="contact-btn telegram"><FaTelegram /> Telegram</a>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>×</button>
            <h2 className="modal-title">{selectedPlan?.name === 'ENTERPRISE' ? 'Корпоративное обучение' : `Тариф: ${selectedPlan?.name}`}</h2>
            
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
                <select name="course" value={formData.course} onChange={handleChange}>
                  <option value="">Выберите курс</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>Python Programming</option>
                  <option>Mobile Development</option>
                  <option>UI/UX Design</option>
                  <option>Data Science</option>
                  <option>Cybersecurity</option>
                  <option>DevOps Engineering</option>
                </select>
                {selectedPlan?.name === 'ENTERPRISE' && (
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
                  {selectedPlan?.name === 'ENTERPRISE' 
                    ? '💰 Стоимость: Договорная' 
                    : `💰 Стоимость: ${selectedPlan?.price.toLocaleString()} сом/${selectedPlan?.period}`}
                </p>
                <p className="modal-info-text">Наш менеджер свяжется с вами для уточнения деталей</p>
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