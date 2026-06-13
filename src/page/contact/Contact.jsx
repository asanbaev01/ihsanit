import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setSubmitted(true); 
    setTimeout(() => setSubmitted(false), 5000); 
    setFormData({ name: '', phone: '', email: '', course: '', message: '' }) 
  }

  const locations = [
    { city: 'Бишкек', address: 'пр. Чуй 123, БЦ', phone: '+996 700 123 456' },
    { city: 'Ош', address: 'ул. Ленина 45, 2 этаж', phone: '+996 700 789 012' }
  ]

  return (
    <section className="contact">
      <h1>Контакты</h1>
      <p className="contact-subtitle">Есть вопросы? Свяжитесь с нами. Мы готовы вам помочь!</p>
      
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>Наши адреса</h3>
              {locations.map((loc, idx) => (
                <div key={idx} className="location">
                  <strong>{loc.city}:</strong> {loc.address}<br />
                  <small>📞 {loc.phone}</small>
                </div>
              ))}
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h3>Звоните</h3>
              <p>+996 550 123 456</p>
              <p>+996 770 789 012</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div>
              <h3>Почта</h3>
              <p>info@ohsanit.kg</p>
              <p>support@ohsanit.kg</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div>
              <h3>Часы работы</h3>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 15:00</p>
              <p>Вс: Выходной</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Мы в соцсетях</h3>
            <div className="social-icons">
              <a href="#">📘 Instagram</a>
              <a href="#">📩 Telegram</a>
              <a href="#">📧 WhatsApp</a>
              <a href="#">💼 LinkedIn</a>
              <a href="#">📺 YouTube</a>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">✓ ЗАЯВКА ОТПРАВЛЕНА! Мы свяжемся с вами в ближайшее время.</div>}
          <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Выберите курс</option>
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>Python Programming</option>
            <option>UI/UX Design</option>
            <option>Mobile Development</option>
            <option>Cybersecurity</option>
            <option>Data Science</option>
            <option>DevOps Engineering</option>
          </select>
          <textarea name="message" placeholder="Ваше сообщение..." rows="4" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  )
}

export default Contact