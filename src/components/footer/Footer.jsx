import React, { useState } from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) {
      setError('Введите email адрес')
      return
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Введите корректный email')
      return
    }
    setSubscribed(true)
    setError('')
    setEmail('')
    setTimeout(() => setSubscribed(false), 5000)
  }

  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>IHSAN IT ACADEMY</h2>
          <p>Стройте свое будущее с нами</p>
          <div className="footer-contact">
            <p>📍 Бишкек, Кыргызстан</p>
            <p>📞 +996 550 123 456</p>
            <p>✉️ info@ohsanit.kg</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Меню</h3>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Главная</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('courses') }}>Курсы</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>О нас</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }}>Цены</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Контакты</a>
        </div>
        <div className="footer-section">
          <h3>Популярные курсы</h3>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('courses') }}>Frontend Development</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('courses') }}>Backend Development</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('courses') }}>Python Programming</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('courses') }}>Mobile Development</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('courses') }}>Data Science</a>
        </div>
        <div className="footer-section">
          <h3>Подписка</h3>
          <p>Будьте в курсе новостей</p>
          <form className="newsletter" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Ваш Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? 'error' : ''}
            />
            <button type="submit">Подписаться</button>
          </form>
          {error && <p className="footer-error">{error}</p>}
          {subscribed && <p className="footer-success">✓ Спасибо за подписку!</p>}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} OHSAN IT ACADEMY. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer