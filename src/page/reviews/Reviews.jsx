// page/reviews/Reviews.js
import React, { useState, useEffect } from 'react'

function Reviews() {
  const [activeReview, setActiveReview] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const reviews = [
    { name: 'Айжан Абдыраимова', role: 'Frontend Developer в TechCorp', text: 'Ihsan IT Academy помог мне освоить новую профессию и найти работу. Курс по React был очень полезным и современным. Теперь я работаю в крупной IT компании!', rating: 5, image: '👩‍💻', course: 'Frontend Development' },
    { name: 'Эрлан Асанов', role: 'Backend Developer', text: 'Курсы Python и Django проведены на отличном уровне. Преподаватели профессионалы и к каждому студенту индивидуальный подход. Всем рекомендую!', rating: 5, image: '👨‍💻', course: 'Python Programming' },
    { name: 'Мээрим Кадыралиева', role: 'UI/UX Designer', text: 'Дизайн курсы помогли мне создать портфолио и устроиться на первую работу. Мои знания Figma и Adobe XD расширились. Спасибо!', rating: 5, image: '🎨', course: 'UI/UX Design' },
    { name: 'Бексултан Калыков', role: 'Mobile Developer', text: 'Через курс React Native я создал 2 мобильных приложения. Теперь работаю фрилансером и хорошо зарабатываю. Помощь академии была огромной!', rating: 5, image: '📱', course: 'Mobile Development' }
  ]

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => setActiveReview((prev) => (prev + 1) % reviews.length), 6000)
    return () => clearInterval(interval)
  }, [autoPlay, reviews.length])

  const stats = [{ label: 'Студентов', value: '5000+' }, { label: 'Успеваемость', value: '98%' }, { label: 'Трудоустройство', value: '85%' }, { label: 'Довольны', value: '4.9/5' }]

  return (
    <section className="reviews">
      <h1>Отзывы студентов</h1>
      <p className="reviews-subtitle">Что говорят наши студенты?</p>
      <div className="reviews-stats">{stats.map((stat, idx) => (<div key={idx} className="review-stat"><h3>{stat.value}</h3><p>{stat.label}</p></div>))}</div>
      <div className="reviews-slider">
        <div className="review-card">
          <div className="review-img">{reviews[activeReview].image}</div>
          <div className="review-stars">{'★'.repeat(reviews[activeReview].rating)}{'☆'.repeat(5 - reviews[activeReview].rating)}</div>
          <p className="review-text">“{reviews[activeReview].text}”</p>
          <h4>{reviews[activeReview].name}</h4>
          <p className="review-role">{reviews[activeReview].role}</p>
          <p className="review-course">📘 {reviews[activeReview].course}</p>
        </div>
        <div className="review-controls">
          <button className="review-prev" onClick={() => { setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length); setAutoPlay(false) }}>←</button>
          <button className="review-play" onClick={() => setAutoPlay(!autoPlay)}>{autoPlay ? '⏸' : '▶'}</button>
          <button className="review-next" onClick={() => { setActiveReview((prev) => (prev + 1) % reviews.length); setAutoPlay(false) }}>→</button>
        </div>
        <div className="review-dots">{reviews.map((_, idx) => (<button key={idx} className={`review-dot ${activeReview === idx ? 'active' : ''}`} onClick={() => { setActiveReview(idx); setAutoPlay(false) }} />))}</div>
      </div>
      <div className="rating-summary"><div className="rating-score"><span className="rating-number">4.9</span><span className="rating-stars">★★★★★</span><span className="rating-total">На основе 1200+ отзывов</span></div></div>
    </section>
  )
}

export default Reviews