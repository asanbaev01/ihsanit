// page/about/About.js
import React, { useState } from 'react'
import '../about/About.css'
function About() {
  const [activeTab, setActiveTab] = useState(0)
  
  const tabs = [
    { title: 'Миссия', content: 'Сделать IT образование доступным для каждого в Кыргызстане и подготовить востребованных специалистов.' },
    { title: 'Ценности', content: 'Качество, доступность, поддержка, инновации, результат и постоянное развитие.' },
    { title: 'История', content: 'Основана в 2015 году. За 10 лет обучили более 5000 студентов.' }
  ]

  const features = [
    { icon: '🎓', title: '10+ лет опыта', desc: 'В IT образовании' },
    { icon: '👨‍🏫', title: 'Эксперты-менторы', desc: 'Практикующие специалисты' },
    { icon: '💻', title: 'Современные классы', desc: 'Новейшее оборудование' },
    { icon: '🏆', title: 'Сертификат', desc: 'По окончании курса' },
    { icon: '🤝', title: 'Помощь с работой', desc: 'Трудоустройство' },
    { icon: '🌍', title: 'Online & Офлайн', desc: 'Любой формат' }
  ]

  const teachers = [
    { name: 'Азамат Асанов', role: 'Senior Fullstack Developer', exp: '8 лет', image: '👨‍💻', students: 1200, rating: 4.9 },
    { name: 'Айсулуу Кенжебаева', role: 'Python Эксперт', exp: '6 лет', image: '👩‍💻', students: 950, rating: 5.0 },
    { name: 'Бектур Сартбаев', role: 'Frontend Lead', exp: '5 лет', image: '👨‍🎨', students: 800, rating: 4.8 }
  ]

  const achievements = [
    { value: '5000+', label: 'Студентов' },
    { value: '50+', label: 'Курсов' },
    { value: '98%', label: 'Успеха' },
    { value: '30+', label: 'Партнеров' }
  ]

  return (
    <section className="about">
      <h1>Об академии</h1>
      <div className="about-hero">
        <p className="about-text">
          Ihsan IT Academy - ведущая IT академия в Кыргызстане с 2015 года. 
          Мы подготовили более 5000 специалистов, которые работают в топовых IT компаниях.
        </p>
      </div>
      
      <div className="about-tabs">
        {tabs.map((tab, idx) => (
          <button key={idx} className={`tab-btn ${activeTab === idx ? 'active' : ''}`} onClick={() => setActiveTab(idx)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{tabs[activeTab].content}</p>
      </div>

      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="teachers-title">Наши менторы</h2>
      <div className="teachers-grid">
        {teachers.map((teacher, idx) => (
          <div key={idx} className="teacher-card">
            <div className="teacher-avatar">{teacher.image}</div>
            <h3>{teacher.name}</h3>
            <p className="teacher-role">{teacher.role}</p>
            <p className="teacher-exp">⭐ {teacher.exp} опыта</p>
            <div className="teacher-stats">
              <span>🎓 {teacher.students}+ студентов</span>
              <span>⭐ {teacher.rating}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="about-stats">
        {achievements.map((stat, idx) => (
          <div key={idx} className="about-stat">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About