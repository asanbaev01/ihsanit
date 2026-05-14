// components/Contact.js
import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', phone: '', email: '', course: '', message: '' })
  }

  const locations = [
    { city: 'Bishkek', address: 'Chui Ave 123, Business Center', phone: '+996 700 123 456' },
    { city: 'Osh', address: 'Lenin St 45, 2nd floor', phone: '+996 700 789 012' }
  ]

  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">Суроолоруңуз болсо, биз менен байланышыңыз. Биз сизге жардам берүүгө даярбыз!</p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>Our Locations</h3>
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
              <h3>Call Us</h3>
              <p>+996 550 123 456</p>
              <p>+996 770 789 012</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>info@ihsanit.kg</p>
              <p>support@ihsanit.kg</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 - 18:00</p>
              <p>Saturday: 10:00 - 15:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">📘 Instagram</a>
              <a href="#">📩 Telegram</a>
              <a href="#">📧 WhatsApp</a>
              <a href="#">💼 LinkedIn</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">✓ АРИЗАҢЫЗ ЖӨНӨТҮЛДҮ! Биз сизге тез арада байланышабыз.</div>}
          
          <input 
            type="text" 
            name="name" 
            placeholder="Сиздин атыңыз" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Телефон номериңиз" 
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Электрондук почтаңыз" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Курс тандаңыз</option>
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>Python Programming</option>
            <option>UI/UX Design</option>
            <option>Mobile Development</option>
            <option>Cybersecurity</option>
          </select>
          <textarea 
            name="message" 
            placeholder="Кошумча суроолоруңуз..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact