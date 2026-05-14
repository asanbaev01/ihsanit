// components/Reviews.js
import React, { useState } from 'react'

function Reviews() {
  const [activeReview, setActiveReview] = useState(0)

  const reviews = [
    {
      name: 'Айжан Абдыраимова',
      role: 'Frontend Developer at TechCorp',
      text: 'Ihsan IT Academy мага жаңы кесипти үйрөнүүгө жана иштөөгө жардам берди. React курсу эң керектүү жана заманбап болду. Азыр мен ири IT компанияда иштейм!',
      rating: 5,
      image: '👩‍💻',
      course: 'Frontend Development'
    },
    {
      name: 'Эрлан Асанов',
      role: 'Backend Developer',
      text: 'Python жана Django курстары мыкты деңгээлде өткөрүлдү. Мугалимдер кесипкөй жана ар бир студентке жекече мамиле жасашат. Баарына сунуштайм!',
      rating: 5,
      image: '👨‍💻',
      course: 'Python Programming'
    },
    {
      name: 'Мээрим Кадыралиева',
      role: 'UI/UX Designer',
      text: 'Дизайн курстары мага портфолиомду түзүүгө жана биринчи жумушка орношууга жардам берди. Figma жана Adobe XD боюнча билимдерим кеңейди. Рахмат!',
      rating: 5,
      image: '🎨',
      course: 'UI/UX Design'
    },
    {
      name: 'Бексултан Калыков',
      role: 'Mobile Developer',
      text: 'React Native курсу аркылуу 2 мобилдик колдонмо түздүм. Азыр фриланс аркылуу иштеп, жакшы киреше алып жатам. Академиянын жардамы чоң болду!',
      rating: 5,
      image: '📱',
      course: 'Mobile Development'
    }
  ]

  const stats = [
    { label: 'Students', value: '5000+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Job Placement', value: '85%' },
    { label: 'Satisfaction', value: '4.9/5' }
  ]

  return (
    <section className="reviews">
      <h1>Student Reviews</h1>
      <p className="reviews-subtitle">Биздин студенттерибиз эмне дешет?</p>

      <div className="reviews-stats">
        {stats.map((stat, idx) => (
          <div key={idx} className="review-stat">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="reviews-slider">
        <div className="review-card">
          <div className="review-img">{reviews[activeReview].image}</div>
          <div className="review-stars">
            {'★'.repeat(reviews[activeReview].rating)}{'☆'.repeat(5 - reviews[activeReview].rating)}
          </div>
          <p className="review-text">“{reviews[activeReview].text}”</p>
          <h4>{reviews[activeReview].name}</h4>
          <p className="review-role">{reviews[activeReview].role}</p>
          <p className="review-course">📘 {reviews[activeReview].course}</p>
        </div>

        <div className="review-dots">
          {reviews.map((_, idx) => (
            <button 
              key={idx} 
              className={`review-dot ${activeReview === idx ? 'active' : ''}`}
              onClick={() => setActiveReview(idx)}
            />
          ))}
        </div>
      </div>

      <div className="rating-summary">
        <div className="rating-score">
          <span className="rating-number">4.9</span>
          <span className="rating-stars">★★★★★</span>
          <span className="rating-total">Based on 1200+ reviews</span>
        </div>
      </div>
    </section>
  )
}

export default Reviews