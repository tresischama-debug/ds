'use client'

export default function AppAccessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/app-screenshot.jpg" 
                alt="App Screenshot" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-xl">APP SCREENSHOT PLACEHOLDER</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get Access to My App
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Track your progress, access workouts, and stay connected with your coach.
            </p>
            <div>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105 uppercase tracking-wide">
                GET ACCESS TO MY APP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

