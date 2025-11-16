'use client'

import { useState } from 'react'

export default function TestimonialsSection() {
  const [activeCarousel1, setActiveCarousel1] = useState(0)
  const [activeCarousel2, setActiveCarousel2] = useState(0)

  const testimonials = [
    {
      text: 'This program changed my life completely!',
      author: 'Client 1',
    },
    {
      text: 'I never thought I could achieve these results.',
      author: 'Client 2',
    },
    {
      text: 'The best investment I\'ve made in myself.',
      author: 'Client 3',
    },
    {
      text: 'Amazing support and guidance throughout.',
      author: 'Client 4',
    },
  ]

  const nextSlide1 = () => {
    setActiveCarousel1((prev) => (prev + 1) % 4)
  }

  const prevSlide1 = () => {
    setActiveCarousel1((prev) => (prev - 1 + 4) % 4)
  }

  const nextSlide2 = () => {
    setActiveCarousel2((prev) => (prev + 1) % 4)
  }

  const prevSlide2 = () => {
    setActiveCarousel2((prev) => (prev - 1 + 4) % 4)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carousel 1 */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-gray-700 mb-4">
                  {testimonials[activeCarousel1]?.text}
                </p>
                <p className="text-gray-600 font-semibold">
                  - {testimonials[activeCarousel1]?.author}
                </p>
              </div>
            </div>
            <button
              onClick={prevSlide1}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={nextSlide1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              aria-label="Next slide"
            >
              →
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveCarousel1(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeCarousel1
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Show slide ${index + 1} of 4`}
                />
              ))}
            </div>
          </div>

          {/* Carousel 2 */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-gray-700 mb-4">
                  {testimonials[activeCarousel2]?.text}
                </p>
                <p className="text-gray-600 font-semibold">
                  - {testimonials[activeCarousel2]?.author}
                </p>
              </div>
            </div>
            <button
              onClick={prevSlide2}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={nextSlide2}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              aria-label="Next slide"
            >
              →
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveCarousel2(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeCarousel2
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Show slide ${index + 1} of 4`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

