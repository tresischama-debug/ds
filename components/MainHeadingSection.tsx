'use client'

import { useRouter } from 'next/navigation'

export default function MainHeadingSection() {
  const router = useRouter()

  const handleSignUp = () => {
    router.push('/checkout')
  }

  return (
    <section id="main-heading" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Image with play button overlay */}
          <div className="relative">
            <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/person-photo.jpg" 
                alt="Person" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-xl">PERSON PHOTO PLACEHOLDER</span>
              </div>
              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all group">
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Embrace Your Inner Strength
            </h1>
            <div>
              <button
                onClick={handleSignUp}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105 uppercase tracking-wide"
              >
                SIGN UP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

