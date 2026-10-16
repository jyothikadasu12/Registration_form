
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './ImageSlider.css'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    title: 'A fresh start begins here.',
    description: 'Create your account and get connected.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    title: 'Make room for new ideas.',
    description: 'Your next chapter starts with one simple step.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    title: 'Everything in one place.',
    description: 'A simple and welcoming registration experience.',
  },
]

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const changeSlide = (direction) => {
    setActiveIndex((current) =>
      (current + direction + slides.length) % slides.length
    )
  }

  const slide = slides[activeIndex]

  return (
    <section className="slider-panel" aria-label="Welcome carousel">
      <img
        className="slider-image"
        src={slide.image}
        alt="Modern workspace"
      />

      <div className="slider-overlay" />

      <div className="slider-content">
        <span className="slider-eyebrow">WELCOME ABOARD</span>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>

        <div className="slider-controls">
          <button
            type="button"
            className="slider-arrow"
            aria-label="Previous image"
            onClick={() => changeSlide(-1)}
          >
            <ArrowLeft size={18} />
          </button>

          <div className="slider-dots">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`slider-dot ${
                  index === activeIndex ? 'active' : ''
                }`}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="slider-arrow"
            aria-label="Next image"
            onClick={() => changeSlide(1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ImageSlider
