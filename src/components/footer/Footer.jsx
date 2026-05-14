// components/Footer.js
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>IHSAN IT ACADEMY</h2>
          <p>Келечегиңизди биз менен куруңуз</p>
          <div className="footer-contact">
            <p>📍 Bishkek, Kyrgyzstan</p>
            <p>📞 +996 550 123 456</p>
            <p>✉️ info@ihsanit.kg</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-section">
          <h3>Popular Courses</h3>
          <a href="#">Frontend Development</a>
          <a href="#">Backend Development</a>
          <a href="#">Python Programming</a>
          <a href="#">Mobile Development</a>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Жаңылыктарды биринчи болуп алыңыз</p>
          <div className="newsletter">
            <input type="email" placeholder="Email адресиңиз" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 IHSAN IT ACADEMY. Баардык укуктар корголгон.</p>
      </div>
    </footer>
  )
}

export default Footer