'use client'

import { useRouter } from 'next/navigation'

export default function FeaturesSection() {
  const router = useRouter()

  const handleSignUp = () => {
    router.push('/checkout')
  }

  const features = [
    {
      title: 'A Strong, Resilient Body:',
      items: [
        'Personalized programming designed to help you lift heavy, build muscle, and feel powerful.',
        'Access to the app to track your workouts, food and progress.',
      ],
    },
    {
      title: 'Unshakeable Confidence and Mindset:',
      items: [
        'Tools and strategies to help you break free from self-doubt and build unstoppable discipline.',
        'Weekly check-ins to keep you accountable every step of the way.',
      ],
    },
    {
      title: 'A Sustainable Lifestyle:',
      items: [
        'Nutrition plans tailored to your goals, making healthy eating feel effortless.',
        'Tools and strategies to create habits that stick for life.',
      ],
    },
    {
      title: 'Your Own Support System:',
      items: [
        'Direct 1:1 access to your Coach for accountability and motivation.',
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                {feature.title}
              </h2>
              <ul className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 text-lg flex items-start">
                    <span className="mr-3 text-blue-600 text-2xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={handleSignUp}
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105 uppercase tracking-wide"
          >
            SIGN UP NOW
          </button>
        </div>
      </div>
    </section>
  )
}

