import React, { useState, useEffect } from 'react'
import './Home.css'

function Home({ setActiveSection }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const slides = [
    { title: 'Стань IT специалистом', text: 'Frontend, Backend, Python, UI/UX и другие IT курсы', badge: '⚡ Твой старт в будущее' },
    { title: 'Практическое обучение', text: '12+ реальных проектов в каждом курсе', badge: '💻 Практика, а не теория' },
    { title: 'Трудоустройство', text: '98% наших студентов находят работу', badge: '💼 Гарантия успеха' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
    revealElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const courses = [
    { id: 1, name: 'Frontend Development', count: '1240+', level: 'С нуля до PRO', icon: '🎨', color: 'var(--accent-pink)' },
    { id: 2, name: 'Backend Development', count: '890+', level: 'Продвинутый', icon: '⚙️', color: 'var(--accent-purple)' },
    { id: 3, name: 'Python Programming', count: '2100+', level: 'Все уровни', icon: '🐍', color: 'var(--accent-cyan)' },
    { id: 4, name: 'UI/UX Design', count: '560+', level: 'Начинающий', icon: '🎯', color: 'var(--accent-pink)' },
    { id: 5, name: 'Data Science', count: '430+', level: 'Средний и выше', icon: '📊', color: 'var(--accent-purple)' },
    { id: 6, name: 'Mobile Dev', count: '720+', level: 'React Native', icon: '📱', color: 'var(--accent-cyan)' },
    { id: 7, name: 'DevOps', count: '310+', level: 'Профессиональный', icon: '🚀', color: 'var(--accent-purple)' },
    { id: 8, name: 'QA Testing', count: '580+', level: 'С нуля', icon: '✅', color: 'var(--accent-pink)' }
  ]

  const benefits = [
    { icon: '🎓', title: 'Сертификат', desc: 'Государственного образца' },
    { icon: '💼', title: 'Стажировка', desc: 'В IT компаниях' },
    { icon: '📂', title: 'Портфолио', desc: '12+ реальных проектов' },
    { icon: '🚀', title: 'Карьера', desc: 'Помощь в трудоустройстве' },
    { icon: '👨‍🏫', title: 'Наставники', desc: 'Топ-эксперты индустрии' },
    { icon: '👥', title: 'Community', desc: 'Комьюнити 5000+ студентов' }
  ]

  const stats = [
    { icon: '🎓', value: '5000+', label: 'Выпускников' },
    { icon: '💼', value: '98%', label: 'Трудоустройство' },
    { icon: '🤝', value: '350+', label: 'Партнеров' },
    { icon: '📚', value: '125', label: 'Онлайн курсов' }
  ]

  const testimonials = [
    {
      id: 1,
      text: "После курсов в течение 2 недель устроилась на работу frontend разработчиком!",
      name: "Айжан К.",
      position: "Frontend Developer",
      company: "Tech Solutions",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 2,
      text: "Курс по Backend очень мощный! Сейчас разрабатываю собственный стартап.",
      name: "Михаил В.",
      position: "Backend Developer",
      company: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 3,
      text: "Отлично освоила UI/UX дизайн. В моем портфолио уже 8 крупных проектов.",
      name: "Назгуль Т.",
      position: "UI/UX Designer",
      company: "Creative Studio",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ]

  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="home">
      <div className="glow-bg">
        <div className="orb orb-blue"></div>
        <div className="orb orb-indigo"></div>
        <div className="orb orb-deep"></div>
        <div className="orb orb-yellow-accent"></div>
        <div className="orb orb-yellow-accent-2"></div>
      </div>
      <div className="cyber-grid"></div>

      <div className={`navbar-glow ${scrolled ? 'scrolled' : ''}`}></div>

      <section className="hero-section scroll-reveal">
        <div className="home-badge" key={`badge-${currentSlide}`}>
          <span className="badge-pulse"></span>
          {slides[currentSlide].badge}
        </div>
        
        <div className="slideshow">
          <h1 key={`title-${currentSlide}`} className="hero-title">
            {slides[currentSlide].title.split(' ').map((word, i) => 
              i === slides[currentSlide].title.split(' ').length - 1 ? 
              <span key={i} className="gradient-text"> {word}</span> : word + ' '
            )}
          </h1>
          <p key={`text-${currentSlide}`} className="hero-subtitle">{slides[currentSlide].text}</p>
        </div>

        <div className="slide-dots">
          {slides.map((_, idx) => (
            <span key={idx} className={`dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)} />
          ))}
        </div>

        <div className="hero-buttons">
          <button className="btn-modern btn-primary-neon" onClick={() => setActiveSection('courses')}>
            <span>🚀 Начать обучение</span>
          </button>
          <button className="btn-modern btn-secondary-neon" onClick={() => setActiveSection('contacts')}>
            <span>💬 Консультация</span>
          </button>
        </div>
      </section>

      <section className="home-stats scroll-reveal">
        <div className="stats-glass-grid">
          {stats.map((item, idx) => (
            <div className="stat-modern-card" key={idx}>
              <div className="stat-icon-glow">{item.icon}</div>
              <div className="stat-info">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-courses scroll-reveal">
        <div className="section-header">
          <h2>🔥 Популярные <span className="gradient-text">направления</span></h2>
          <p>Выберите профессию будущего и начните зарабатывать уже через 6 месяцев</p>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id} style={{ '--card-accent': course.color }}>
              <div className="card-border-glow"></div>
              <div className="card-content">
                <div className="course-icon">{course.icon}</div>
                <span className="course-students">🟢 {course.count} студентов</span>
                <h4>{course.name}</h4>
                <span className="course-level">{course.level}</span>
                <div className="course-footer">
                  <span className="more-link">Подробнее <span className="arrow">→</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-benefits scroll-reveal">
        <div className="section-header">
          <h2>💎 Почему <span className="gradient-text">выбирают нас</span></h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((item, idx) => (
            <div className="benefit-card-modern" key={idx}>
              <div className="benefit-icon-box">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-testimonial scroll-reveal">
        <div className="testimonial-container-modern">
          <div className="testimonial-header">
            <h3>📣 Что говорят студенты?</h3>
            <div className="testimonial-nav">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`testimonial-dot ${idx === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                />
              ))}
            </div>
          </div>

          <div className="testimonial-card-modern">
            <div className="quote-mark">“</div>
            <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
            
            <div className="testimonial-profile">
              <img src={testimonials[activeTestimonial].image} alt="avatar" className="profile-img" />
              <div className="profile-info">
                <h5>{testimonials[activeTestimonial].name}</h5>
                <p>{testimonials[activeTestimonial].position} в <span className="highlight-text">{testimonials[activeTestimonial].company}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quick-callback-banner scroll-reveal">
        <div className="callback-text">
          <h4>Остались вопросы?</h4>
          <p>Оставьте заявку, и наш ментор перезвонит вам в течение 10 минут!</p>
        </div>
        <button className="btn-modern btn-cyan" onClick={() => alert('Заявка принята!')}>
          <span>📞 Перезвоните мне</span>
        </button>
      </div>
    </div>
  )
}

export default Home