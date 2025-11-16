'use client'

import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  const handleSignUp = () => {
    router.push('/checkout')
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo/Social */}
          <div className="space-y-4">
            <div>
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-32 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.classList.remove('hidden');
                }}
              />
              <div className="hidden w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">LOGO</span>
              </div>
            </div>
            <button
              onClick={handleSignUp}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 uppercase tracking-wide"
            >
              SIGN UP NOW
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-start">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Social Link 1">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
                  <span className="text-lg">📱</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Social Link 2">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
                  <span className="text-lg">📧</span>
                </div>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-3">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ashton Wood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

