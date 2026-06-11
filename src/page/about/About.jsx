import React, { useState } from 'react'
import '../about/About.css'

function About() {
  const [activeTab, setActiveTab] = useState(0)
  
  const tabs = [
    { title: 'Миссия', content: 'Сделать IT образование доступным для каждого в Кыргызстане и подготовить востребованных специалистов, способных конкурировать на мировом рынке.' },
    { title: 'Ценности', content: 'Качество, доступность, поддержка, инновации, результат и постоянное развитие. Мы верим в каждого студента и помогаем достичь целей.' },
    { title: 'История', content: 'Основана в 2015 году. За 10 лет успешной работы обучили более 5000 студентов. Выпускники работают в Google, Facebook, Kolesa Group, Beeline, Optima Bank и других топовых компаниях.' }
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
    { value: '98%', label: 'Успеваемость' },
    { value: '85%', label: 'Трудоустройство' },
    { value: '30+', label: 'Партнеров' },
    { value: '10+', label: 'Лет опыта' }
  ]

  const partners = [
    { name: 'Google', logo: '🔵', field: 'Технологии' },
    { name: 'Microsoft', logo: '🟠', field: 'Образование' },
    { name: 'Kolesa Group', logo: '🟢', field: 'Трудоустройство' },
    { name: 'Beeline', logo: '🔴', field: 'Телеком' },
    { name: 'Optima Bank', logo: '🟣', field: 'Финансы' },
    { name: 'Peaksoft', logo: '⚪', field: 'IT Компания' }
  ]

  const milestones = [
    { year: '2015', title: 'Основание академии', desc: 'Первые 50 студентов' },
    { year: '2017', title: 'Расширение', desc: 'Открытие нового филиала' },
    { year: '2019', title: '1000 студентов', desc: 'Первый юбилей' },
    { year: '2021', title: 'Международное признание', desc: 'Партнерство с Google' },
    { year: '2023', title: '5000 выпускников', desc: 'Рекордный набор' },
    { year: '2025', title: '10 лет успеха', desc: 'Лидер IT образования' }
  ]

  return (
    <section className="about">
      <h1>Об академии</h1>
      <div className="about-hero">
        <p className="about-text">
          Ihsan IT Academy - ведущая IT академия в Кыргызстане с 2015 года. 
          Мы подготовили более 5000 специалистов, которые работают в топовых IT компаниях по всему миру.
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

      <div className="milestones-section">
        <h2 className="section-title">Наша история успеха</h2>
        <div className="milestones-timeline">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="milestone-item">
              <div className="milestone-year">{milestone.year}</div>
              <div className="milestone-dot"></div>
              <div className="milestone-content">
                <h4>{milestone.title}</h4>
                <p>{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="partners-section">
        <h2 className="section-title">Наши партнеры</h2>
        <p className="section-subtitle">Мы сотрудничаем с ведущими компаниями</p>
        <div className="partners-grid">
          {partners.map((partner, idx) => (
            <div key={idx} className="partner-card">
              <div className="partner-logo">{partner.logo}</div>
              <h4>{partner.name}</h4>
              <p>{partner.field}</p>
            </div>
          ))}
        </div>
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

      <div className="why-us">
        <h2 className="section-title">Почему выбирают нас?</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <div className="why-icon">🎯</div>
            <h4>Практическое обучение</h4>
            <p>70% практики, 30% теории. Реальные проекты и кейсы</p>
          </div>
          <div className="why-us-item">
            <div className="why-icon">👥</div>
            <h4>Группы до 15 человек</h4>
            <p>Индивидуальный подход к каждому студенту</p>
          </div>
          <div className="why-us-item">
            <div className="why-icon">🔄</div>
            <h4>Возможность пересдачи</h4>
            <p>Бесплатная пересдача и повторное прохождение</p>
          </div>
          <div className="why-us-item">
            <div className="why-icon">💼</div>
            <h4>Карьерный центр</h4>
            <p>Помощь в трудоустройстве и резюме</p>
          </div>
          <div className="why-us-item">
            <div className="why-icon">📜</div>
            <h4>Государственный диплом</h4>
            <p>Сертификат международного образца</p>
          </div>
          <div className="why-us-item">
            <div className="why-icon">🏠</div>
            <h4>Удобное расположение</h4>
            <p>Филиалы в Бишкеке и Оше</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About