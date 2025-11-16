'use client'

export default function HeroSection() {
  const handleSignUp = () => {
    // Scroll to questionnaire section
    const element = document.getElementById('questionnaire')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback if video doesn't exist */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">
              VIDEO PLACEHOLDER
            </div>
          </div>
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            {/* Removed white background box and enlarged the logo */}
            <img
              src="/logo.png"
              alt="AW Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const placeholder = e.currentTarget.nextElementSibling as HTMLElement
                if (placeholder) placeholder.classList.remove('hidden')
              }}
            />
            {/* Text fallback (hidden by default) */}
            <div className="hidden absolute inset-0 bg-transparent text-white flex items-center justify-center font-bold text-lg rounded">
              AW
            </div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold whitespace-nowrap">Sculpt By Ashton</div>
          </div>
        </div>
      </div>

      {/* Content - Centered in middle of screen */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="w-full max-w-4xl px-4 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center">
          {/* Main Heading: two explicit lines, both forced to single-line (whitespace-nowrap). */}
          <header className="mb-6 w-full">
            <div
              className="font-bold text-white ubuntu-bold whitespace-nowrap mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', lineHeight: 1 }}
            >
              Claim the confidence you\'ve earned
            </div>

            <div
              className="font-bold mt-3 text-[#FF6B9D] whitespace-nowrap mx-auto"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1 }}
            >
              Walk like it\'s already yours
            </div>
          </header>

          {/* Descriptive Paragraph */}
          <p className="text-white text-base sm:text-lg md:text-xl mb-8 leading-relaxed ubuntu-regular max-w-[80%] mx-auto">
            Sculpted by Ashton isn\'t just about building a powerful physique. It\'s a mindset. It\'s understanding that your body is a work of art in every single way. And this piece of art is built on the foundation of discipline, self-respect, the relentless, and endless drive to evolve. This is about becoming the version of yourself that follows through, that leads, that shows up with intention every single day. I\'m here to guide that transformation with fitness and nutrition tailored specifically to YOU, helping you step into your strongest, most unstoppable self.
          </p>

          {/* Sign Up Button */}
          <button
            onClick={handleSignUp}
            className="bg-[#FF6B9D] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FF5A8A] transition-all shadow-xl transform hover:scale-105 flex items-center gap-2 group mx-auto"
          >
            SIGN UP NOW
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}