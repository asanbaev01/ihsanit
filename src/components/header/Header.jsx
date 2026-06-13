import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/img/ihsanlogo3.png'

function Header({ setActiveSection, setSelectedCourse }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section) => {
    setActiveSection(section)
    setSelectedCourse(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container" onClick={() => handleNavClick('home')}>
        <div className="logo-glow"></div>
        <img src={logo} alt="OHSAN IT ACADEMY" className="logo-img" />
        <span className="logo-text">IHSAN</span>
      </div>
      <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
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