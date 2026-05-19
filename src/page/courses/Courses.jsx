// page/courses/Courses.js
import React, { useState } from 'react'

function Courses({ setActiveSection, setSelectedCourse }) {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')

  const courses = [
    { id: 1, title: 'Frontend Development', duration: '4 месяца', price: 8000, priceText: '8000 сом', students: 1240, level: 'Начинающий', category: 'frontend', projects: '10+ проектов', tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Git'], description: 'Создание веб-сайтов: верстка и интерактивные элементы.', lessons: 48, hours: 96 },
    { id: 2, title: 'Backend Development', duration: '5 месяцев', price: 9000, priceText: '9000 сом', students: 890, level: 'Средний', category: 'backend', projects: '8+ проектов', tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'JWT'], description: 'Серверная логика, базы данных и создание API.', lessons: 60, hours: 120 },
    { id: 3, title: 'Python Programming', duration: '6 месяцев', price: 10000, priceText: '10000 сом', students: 2100, level: 'Все уровни', category: 'python', projects: '12+ проектов', tech: ['Python', 'Django', 'Flask', 'PostgreSQL', 'REST', 'Celery'], description: 'Программирование на Python, веб-разработка и анализ данных.', lessons: 72, hours: 144 },
    { id: 4, title: 'UI/UX Design', duration: '3 месяца', price: 6000, priceText: '6000 сом', students: 560, level: 'Начинающий', category: 'design', projects: '5+ проектов', tech: ['Figma', 'Adobe XD', 'Photoshop', 'Prototyping', 'User Research'], description: 'Создание удобных интерфейсов и дизайна.', lessons: 36, hours: 72 },
    { id: 5, title: 'Mobile Development', duration: '5 месяцев', price: 9500, priceText: '9500 сом', students: 670, level: 'Средний', category: 'mobile', projects: '6+ проектов', tech: ['React Native', 'Flutter', 'Firebase', 'Mobile UI', 'App Store'], description: 'Разработка мобильных приложений для iOS и Android.', lessons: 60, hours: 120 },
    { id: 6, title: 'Cybersecurity', duration: '6 месяцев', price: 11000, priceText: '11000 сом', students: 430, level: 'Продвинутый', category: 'security', projects: '8+ проектов', tech: ['Network Security', 'Cryptography', 'Penetration Testing', 'Linux'], description: 'Основы кибербезопасности и защита систем.', lessons: 72, hours: 144 },
    { id: 7, title: 'Data Science', duration: '7 месяцев', price: 12000, priceText: '12000 сом', students: 320, level: 'Продвинутый', category: 'data', projects: '10+ проектов', tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow'], description: 'Анализ данных, машинное обучение и AI.', lessons: 84, hours: 168 },
    { id: 8, title: 'DevOps Engineering', duration: '6 месяцев', price: 11500, priceText: '11500 сом', students: 280, level: 'Продвинутый', category: 'devops', projects: '7+ проектов', tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Linux', 'Terraform'], description: 'Автоматизация развертывания и CI/CD pipelines.', lessons: 72, hours: 144 }
  ]

  const filteredCourses = courses.filter(course => {
    const matchFilter = filter === 'all' || course.category === filter
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchPrice = priceRange === 'all' || 
      (priceRange === 'low' && course.price < 7000) ||
      (priceRange === 'mid' && course.price >= 7000 && course.price < 10000) ||
      (priceRange === 'high' && course.price >= 10000)
    return matchFilter && matchSearch && matchPrice
  })

  const handleViewDetail = (course) => {
    setSelectedCourse(course)
    setActiveSection('coursedetail')
  }

  return (
    <section className="courses">
      <h1>Наши курсы</h1>
      <p className="courses-subtitle">Стройте свое будущее с нами — современные программы и эксперты</p>
      
      <div className="courses-search">
        <input type="text" placeholder="Поиск курсов..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
      </div>

      <div className="courses-filters">
        <div className="courses-filter">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Все курсы</button>
          <button className={filter === 'frontend' ? 'active' : ''} onClick={() => setFilter('frontend')}>Frontend</button>
          <button className={filter === 'backend' ? 'active' : ''} onClick={() => setFilter('backend')}>Backend</button>
          <button className={filter === 'mobile' ? 'active' : ''} onClick={() => setFilter('mobile')}>Mobile</button>
          <button className={filter === 'design' ? 'active' : ''} onClick={() => setFilter('design')}>Design</button>
          <button className={filter === 'python' ? 'active' : ''} onClick={() => setFilter('python')}>Python</button>
          <button className={filter === 'data' ? 'active' : ''} onClick={() => setFilter('data')}>Data Science</button>
        </div>
        <div className="price-filter">
          <button className={priceRange === 'all' ? 'active' : ''} onClick={() => setPriceRange('all')}>Все цены</button>
          <button className={priceRange === 'low' ? 'active' : ''} onClick={() => setPriceRange('low')}>До 7000 сом</button>
          <button className={priceRange === 'mid' ? 'active' : ''} onClick={() => setPriceRange('mid')}>7000-10000 сом</button>
          <button className={priceRange === 'high' ? 'active' : ''} onClick={() => setPriceRange('high')}>От 10000 сом</button>
        </div>
      </div>

      <div className="courses-result">Найдено {filteredCourses.length} курсов</div>

      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-badge">{course.level}</div>
            <h3>{course.title}</h3>
            <p className="course-desc">{course.description}</p>
            <div className="course-tech">
              {course.tech.slice(0, 4).map((t, idx) => <span key={idx}>{t}</span>)}
              {course.tech.length > 4 && <span>+{course.tech.length - 4}</span>}
            </div>
            <div className="course-info">
              <span>📅 {course.duration}</span>
              <span>👨‍🎓 {course.students} студентов</span>
              <span>📁 {course.projects}</span>
              <span>📚 {course.lessons} уроков</span>
            </div>
            <div className="course-footer">
              <span className="course-price">{course.priceText}</span>
              <button onClick={() => handleViewDetail(course)}>Подробнее</button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="no-results">Курсы не найдены. Попробуйте изменить фильтры.</div>
      )}
    </section>
  )
}

export default Courses