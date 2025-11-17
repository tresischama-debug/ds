'use client'

import React from 'react'

export default function FounderSection() {
  return (
    <section className="py-16 bg-[#fbf2ea]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h3 className="heading-font text-2xl md:text-3xl font-extrabold text-black mb-4">
            Founder: <span className="text-pink-300">Tamara Arevalo</span>
          </h3>

          <p className="normal-font text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Growing up in a Hispanic household, we had very little, and I internalized the belief that success wasn't for people like us. This mindset weighed heavily on me for so long. It lingered with every goal or challenge I faced, constantly convincing me I was meant to fail. I found myself trapped in a cycle of negativity, afraid to go beyond my comfort zone. But I reached a point where I just couldn't take being controlled by that. I wanted control over my OWN life.
          </p>

          <p className="normal-font text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Recognizing that my health was the first step, I took the leap and joined a gym. Through my fitness journey, I came to understand that discipline is the key to success. I realized that if I truly desired change, I had to chase it relentlessly. Breaking free from the victim mentality, I pursued my goals with determination. No one else could or will achieve them for me. This journey transformed not only my physical health but also my mindset. Now, my mission extends far beyond the gym! I want to empower others like you to achieve their goals and become the BADDEST, most confident version of themselves. Through customized fitness and nutrition plans and individual support every step of the way, you're going to crush it, like the baddie you are!!
          </p>

          <p className="normal-font text-black font-bold text-base md:text-lg">Being a baddie is a lifestyle.</p>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-64 md:w-72 lg:w-96">
            <img src="/images/founder.jpg" alt="Tamara Arevalo" className="w-full h-auto object-cover rounded-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
