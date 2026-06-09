import React, { useState } from 'react'

function CourseDetail({ selectedCourse, setActiveSection }) {
  const [showModal, setShowModal] = useState(false)
  const [enrollData, setEnrollData] = useState({ name: '', phone: '', email: '' })
  const [enrolled, setEnrolled] = useState(false)

  if (!selectedCourse) {
    return (
      <section className="course-detail">
        <h1>Детали курса</h1>
        <p>Курс не выбран. Пожалуйста, выберите курс из списка.</p>
        <button onClick={() => setActiveSection('courses')}>Вернуться к курсам</button>
      </section>
    )
  }

  const syllabus = [
    'Модуль 1: Введение и основы профессии',
    'Модуль 2: Инструменты и технологии',
    'Модуль 3: Основные концепции',
    'Модуль 4: Продвинутые темы',
    'Модуль 5: Реальные проекты',
    'Модуль 6: Итоговый экзамен и сертификация'
  ]

  const handleEnroll = (e) => {
    e.preventDefault()
    setEnrolled(true)
    setTimeout(() => setEnrolled(false), 5000)
    setShowModal(false)
    setEnrollData({ name: '', phone: '', email: '' })
  }

  const handleChange = (e) => {
    setEnrollData({ ...enrollData, [e.target.name]: e.target.value })
  }

  return (
    <section className="course-detail">
      <button className="back-btn" onClick={() => setActiveSection('courses')}>← Назад к курсам</button>
      
      <div className="detail-header">
        <h1>{selectedCourse.title}</h1>
        <div className="detail-badge">{selectedCourse.level}</div>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-section">
            <h2>📖 О курсе</h2>
            <p>{selectedCourse.description}</p>
            <p>На этом курсе вы изучите технологии: {selectedCourse.tech.join(', ')}. 
            В результате вы выполните {selectedCourse.projects} реальных проектов и создадите портфолио.</p>
          </div>

          <div className="detail-section">
            <h2>📚 Программа курса</h2>
            <ul className="syllabus-list">
              {syllabus.map((item, idx) => (
                <li key={idx}><span className="syllabus-num">{idx + 1}</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h2>🛠 Технологии</h2>
            <div className="detail-tech">{selectedCourse.tech.map((tech, idx) => <span key={idx}>{tech}</span>)}</div>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="price-card">
            <h3>Стоимость курса</h3>
            <div className="price-amount">{selectedCourse.priceText}</div>
            <p>Рассрочка 0% на 3 месяца</p>
            <button className="enroll-btn" onClick={() => setShowModal(true)}>Записаться →</button>
          </div>

          <div className="info-card">
            <h3>Информация</h3>
            <div className="info-row"><span>⏱ Длительность:</span><span>{selectedCourse.duration}</span></div>
            <div className="info-row"><span>👥 Студентов:</span><span>{selectedCourse.students}+</span></div>
            <div className="info-row"><span>📁 Проектов:</span><span>{selectedCourse.projects}</span></div>
            <div className="info-row"><span>📚 Уроков:</span><span>{selectedCourse.lessons || 60} уроков</span></div>
            <div className="info-row"><span>🎓 Сертификат:</span><span>✓ Включен</span></div>
            <div className="info-row"><span>🔄 Поддержка:</span><span>24/7 Ментор</span></div>
          </div>

          <div className="contact-card">
            <h3>Нужна помощь?</h3>
            <p>Есть вопросы? Свяжитесь с нами</p>
            <button onClick={() => setActiveSection('contact')}>Связаться</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>Запись на курс "{selectedCourse.title}"</h2>
            <form onSubmit={handleEnroll}>
              <input type="text" name="name" placeholder="Ваше имя" value={enrollData.name} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Телефон" value={enrollData.phone} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={enrollData.email} onChange={handleChange} required />
              <button type="submit">Отправить заявку</button>
            </form>
          </div>
        </div>
      )}

      {enrolled && <div className="toast">✓ Заявка отправлена! Мы свяжемся с вами в ближайшее время.</div>}

    </section>
  )
}

export default CourseDetail