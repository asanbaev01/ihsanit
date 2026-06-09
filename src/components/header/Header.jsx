// components/header/Header.js
import React, { useState } from 'react'

function Header({ setActiveSection, setSelectedCourse }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (section) => {
    setActiveSection(section)
    setSelectedCourse(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <h1 onClick={() => handleNavClick('home')}>IHSAN IT ACADEMY</h1>
      <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span></span><span></span><span></span>
      </div>
      <nav className={isMobileMenuOpen ? 'mobile-open' : ''}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>Главная</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('courses') }}>Курсы</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>О нас</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('pricing') }}>Цены</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('reviews') }}>Отзывы</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>Контакты</a>
      </nav>
    </header>
  )
}

export default Header