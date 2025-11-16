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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
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
          <div className="relative w-12 h-12 bg-white rounded flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="AW Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 bg-gray-800 text-white flex items-center justify-center font-bold text-lg rounded">
              AW
            </div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold">Sculpt By Ashton</div>
          </div>
        </div>
      </div>

      {/* Content - Centered in middle of screen */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ubuntu-bold">
              Claim the confidence you've earned
              <br />
              <span className="text-[#FF6B9D]">Walk like it's already yours</span>
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed ubuntu-regular">
              Sculpted by Ashton isn't just about building a powerful physique. It's a mindset. It's understanding that your body is a work of art in every single way. And this piece of art is built on the foundation of discipline, self-respect, the relentless, and endless drive to evolve. This is about becoming the version of yourself that follows through, that leads, that shows up with intention every single day. I'm here to guide that transformation with fitness and nutrition tailored specifically to YOU, helping you step into your strongest, most unstoppable self.
            </p>

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              className="bg-[#FF6B9D] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FF5A8A] transition-all shadow-xl transform hover:scale-105 flex items-center gap-2 group mx-auto ubuntu-bold"
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
      </div>
    </section>
  )
}
